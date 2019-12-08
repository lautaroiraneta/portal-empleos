import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class Usuario {
  id: string;
  nombreUsuario: string;
  password: string;
  tipoUsuario: string;
  alumnoId: string;
  empresaId: string;
  alta: string;
  aprobado: boolean;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-aprobacion-usuario',
  templateUrl: './aprobacion-usuario.component.html',
  styleUrls: ['./aprobacion-usuario.component.css']
})
export class AprobacionUsuarioComponent implements OnInit {
  usuarios: Usuario[];
  uSel: any;

  constructor(private http: HttpClient, private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dataService.getUsuarios().subscribe(x => {
      this.usuarios = x.filter(y => y.aprobado === false);
    });
  }

  getTipo(tipo: string) {
    switch (tipo) {
      case 'e':
        return 'Empresa';
      case 'a':
        return 'Alumno';
      case 'u':
        return 'Universidad';
      default:
        return '';
    }
  }

  setAprobado(usuario: Usuario, aprobado: boolean) {
    let data = new Usuario();
    data.id = usuario.id;
    data.aprobado = aprobado;

    this.http.post('https://localhost:44374/Usuario/set-aprobado', data).subscribe(x => {
      usuario.aprobado = aprobado;
    });
  }

  getTipoUsuario(tipo: string) {
    switch (tipo) {
      case 'e':
        return 'Empresa';
      case 'u':
        return 'Universidad';
      case 'a':
        return 'Alumno';
    }
  }

  open(content, id: string) {
    this.uSel = this.usuarios.filter(x => x.id === id)[0];
    if (this.uSel.empresaId !== undefined && this.uSel.empresaId !== null && this.uSel.empresaId !== ''){
      this.http.get('https://localhost:44374/Empresa/get-by-id?empresaId=' + this.uSel.empresaId).subscribe(y => {
        this.uSel.empresa = y;
        console.log(this.uSel);
      });
    }
    if (this.uSel.alumnoId !== undefined && this.uSel.alumnoId !== null && this.uSel.alumnoId !== ''){
      this.http.get('https://localhost:44374/alumno/get-by-id?idAlumno=' + this.uSel.alumnoId).subscribe(y => {
        this.uSel.alumno = y;
        console.log(this.uSel);
      });
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log('modal cerrado');
    });
  }

  cerrarModal() {
    this.modalService.dismissAll();
  }
}