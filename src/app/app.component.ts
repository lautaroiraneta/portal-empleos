import { Component } from '@angular/core';
import { Alumno } from './alumno/alumno.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal-empleos';
  usuario: Alumno;

  ngOnInit(): void {
    var asd = JSON.parse(localStorage.getItem('usuario'));
    console.log(asd);
  }

  iniciarUsuario(alumno: Alumno) {
    this.usuario = alumno;    
  }
}
