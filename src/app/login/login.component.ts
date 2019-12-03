import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Alumno } from '../alumno/alumno.component';

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
    this.http.post('https://localhost:44374/alumno/get-id-by-usuario', data).subscribe((x: Alumno) => {
      if (x.id) {
        alert('Usuario ingresado!');
        localStorage.setItem('usuario', JSON.stringify(x.id));
        this.appComponent.iniciarUsuario(x);
      } else {
        alert('Usuario no encontrado!');
      }
    });
  }

  desloguearse() {
    localStorage.setItem('usuario', null);
    this.appComponent.iniciarUsuario(null);
  }

}
