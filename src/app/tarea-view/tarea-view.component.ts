import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data/data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

export class TareaView {
  id: string;
  nombre: string;
  descripcion: string;
  estado: string;
  responsable: IdValor;
  fechaFin: string;
  comentarios: Comentario[];
  archivos: TareaViewArchivo[];
  tareasQueHabilita: IdValor[];
  tareasPredecesoras: IdValor[];
}

export class Comentario {
  id: string;
  contenido: string;
  usuario: string;
  fecha: string;
  tarea: string;
}

export class TareaViewArchivo {
  id: string;
  archivo: string;
  usuario: string;
}

@Component({
  selector: 'app-tarea-view',
  templateUrl: './tarea-view.component.html',
  styleUrls: ['./tarea-view.component.css']
})
export class TareaViewComponent implements OnInit {
  tarea: TareaView;
  nuevoUsuario: IdValor[] = [];
  usuariosResp: IdValor[];
  comentario: string;

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private modalService: NgbModal, private dataService: DataService) {
    this.tarea = new TareaView();
  }

  ngOnInit() {
    this.initTarea();
    
  }

  initTarea() {
    var id = this.route.snapshot.params['id'];
    this.http.get('https://localhost:44374/TareaView?tareaId=' + id).subscribe((x: TareaView) => {
      this.tarea = x;
    });
  }

  getComentariosNumber(comentarios: Comentario[]): number {
    if (comentarios !== null && comentarios !== undefined && comentarios.length > 0) {
      return comentarios.length;
    } else {
      return 0;
    }
  }

  getArchivosAdjuntosNumber(archivos: TareaViewArchivo[]): number {
    if (archivos !== null && archivos !== undefined && archivos.length > 0) {
      return archivos.length;
    } else {
      return 0;
    }
  }

  abrirTarea(id: string) {
    this.http.get('https://localhost:44374/TareaView?tareaId=' + id).subscribe((x: TareaView) => {
      this.tarea = x;
    });
  }

  upload(files: any) {
    console.log(files);

    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files){
      formData.append(file.name, file);
    }

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    const uploadReq = new HttpRequest('POST', 'https://localhost:44374/TareaView/upload?usuarioId=' + usuario.id + '&tareaId=' + this.tarea.id, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      alert('Archivo Cargado!');
    });
  }

  iniciarTarea() {
    this.http.get('https://localhost:44374/Tarea/mostrar-conf?tareaId=' + this.tarea.id).subscribe((y: IdValor) => {
      if (y !== undefined && y !== null && y.valor === 'mostrar_conf') {
        var r = confirm('Existen predecesoras sin terminar, desea continuar?');
        if (r === true) {
          this.http.get('https://localhost:44374/Tarea/iniciar-tarea?tareaId=' + this.tarea.id).subscribe((x: string) => {
            alert('Tarea iniciada.');
            this.initTarea();
          });
        }
      } else {
        this.http.get('https://localhost:44374/Tarea/iniciar-tarea?tareaId=' + this.tarea.id).subscribe((x: string) => {
          alert('Tarea iniciada.');
          this.initTarea();
        });
      }
    });
  }

  cancelarTarea() {
    this.http.get('https://localhost:44374/Tarea/cancelar-tarea?tareaId=' + this.tarea.id).subscribe(x => {
      alert('Tarea cancelada.');
      this.initTarea();
    });
  }

  finalizarTarea() {
    this.http.get('https://localhost:44374/Tarea/finalizar-tarea?tareaId=' + this.tarea.id).subscribe(x => {
      alert('Tarea finalizada.');
      this.initTarea();
    });
  }

  mostrarBotonIniciar(): boolean {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    return (this.tarea.estado === 'No iniciada' || this.tarea.estado === 'Lista para iniciar') && (this.tarea.responsable.valor.includes(usuario.nombre) && this.tarea.responsable.valor.includes(usuario.apellido));
  }

  mostrarBotonCancelar(): boolean {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    return (this.tarea.estado !== 'Cancelada' && this.tarea.estado !== 'Finalizada') && (this.tarea.responsable.valor.includes(usuario.nombre) && this.tarea.responsable.valor.includes(usuario.apellido));
  }

  mostrarBotonFinalizar(): boolean {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    return (this.tarea.estado === 'En progreso') && (this.tarea.responsable.valor.includes(usuario.nombre) && this.tarea.responsable.valor.includes(usuario.apellido));
  }

  open(content) {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    this.dataService.getUsuariosResp(usuario.id, this.route.snapshot.params['tipo'], this.route.snapshot.params['idetapa']).subscribe(x => {
      this.usuariosResp = x;
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log('modal cerrado');
    });
  }

  cambiarResponsable() {
    if (this.nuevoUsuario.length > 0) {
      let data = new IdValor();
      data.id = this.tarea.id;
      data.valor = this.nuevoUsuario[0].id
      console.log(this.nuevoUsuario);
      this.http.post('https://localhost:44374/Tarea/cambiar-responsable?tipo=' + this.route.snapshot.params['tipo'], data).subscribe(x => {
        alert('Responsable cambiado.');
        this.nuevoUsuario = [];
        this.modalService.dismissAll();
        this.initTarea();
      });
    }   
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }


  cargarComentario() {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    let data = new Comentario();
    data.usuario = usuario.id;
    data.contenido = this.comentario;
    data.tarea = this.route.snapshot.params['id'];
    this.http.post('https://localhost:44374/Comentario', data).subscribe(x => {
      alert('Comentario agregado.');
      this.initTarea();
    });
  }

  downloadFile(){
    this.http.get('https://localhost:44374/TareaView/download').subscribe(x => {
      alert('ho');
    });
  }
}
