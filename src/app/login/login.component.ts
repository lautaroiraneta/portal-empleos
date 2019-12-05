import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Alumno } from '../alumno/alumno.component';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin: string;

  constructor(private http: HttpClient, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  ingresar() {
    let data = new IdValor();
    data.valor = this.usuarioLogin;
    this.http.get('https://localhost:44374/Usuario/get-by-id?nombreUsuario=' + this.usuarioLogin).subscribe((x: Usuario) => {
      alert('Usuario ingresado!');
      localStorage.setItem('usuario', JSON.stringify(x));
      this.appComponent.iniciarUsuario();
      this.usuarioLogin === '';
    }, error => {
      alert('Usuario no encontrado!');
    });
  }

  desloguearse() {
    localStorage.setItem('usuario', null);
    this.appComponent.iniciarUsuario();
  }

}
