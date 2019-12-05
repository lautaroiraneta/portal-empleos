import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';

export class TareaView {
  id: string;
  nombre: string;
  descripcion: string;
  estado: string;
  responsable: string;
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

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.tarea = new TareaView();
  }

  ngOnInit() {
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
}
