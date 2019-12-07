import { Component, OnInit } from '@angular/core';
import { Usuario } from './aprobacion-usuario/aprobacion-usuario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portal-empleos';
  usuarioNombre: string;
  usuario: Usuario;

  constructor(private router: Router) { }


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

  desloguearse() {
    localStorage.setItem('usuario', null);
    this.iniciarUsuario();
    this.router.navigate(['login']);
  }
}
