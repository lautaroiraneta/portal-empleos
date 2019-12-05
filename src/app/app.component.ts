import { Component, OnInit } from '@angular/core';
import { Usuario } from './aprobacion-usuario/aprobacion-usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portal-empleos';
  usuarioNombre: string;
  usuario: Usuario;

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  iniciarUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuario);
  }

  getUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuarioNombre = JSON.parse(localStorage.getItem('usuarioNombre'));
    return JSON.parse(localStorage.getItem('usuario'));
  }
}
