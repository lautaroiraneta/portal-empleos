import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno/alumno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portal-empleos';
  usuario: Alumno;
  usuarioNombre: string;

  ngOnInit(): void {
    var asd = JSON.parse(localStorage.getItem('usuario'));
    console.log(asd);
  }

  iniciarUsuario(alumno: Alumno) {
    if (alumno === null){
      this.usuario = null;
      this.usuarioNombre = null;
    } else {
      this.usuario = alumno;
      this.usuarioNombre = alumno.nombres + ' ' + alumno.apellidos;
    }   
  }

  getUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuarioNombre = JSON.parse(localStorage.getItem('usuarioNombre'));
    return JSON.parse(localStorage.getItem('usuario'));
  }
}
