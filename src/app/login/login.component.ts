import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin: string;
  password: string;
  usuario: Usuario;

  constructor(private http: HttpClient, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('usuario')));
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ingresar() {
    let data = new IdValor();
    data.valor = this.usuarioLogin;
    this.http.get('https://localhost:44374/Usuario/get-by-id?nombreUsuario=' + this.usuarioLogin + '&password=' + this.password).subscribe((x: Usuario) => {
      alert('Usuario ingresado!');
      localStorage.setItem('usuario', JSON.stringify(x));
      this.appComponent.iniciarUsuario();
      this.usuarioLogin = '';
      this.password = '';
      this.usuario = x;
      // this.router.navigate(['empty']);
    }, (error: any) => {
      if (error.error.includes('aprobado')){
        alert ('El usuario no está aprobado. Póngase en contacto con la Universidad.')
      } else if (error.error.includes('incorrectos')) {
        alert('Datos de login incorrectos. Intente nuevamente.')
      }
    });
  }

  desloguearse() {
    localStorage.setItem('usuario', null);
    this.appComponent.iniciarUsuario();
  }

}
