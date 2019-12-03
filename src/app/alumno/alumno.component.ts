import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

export class Alumno {
  id: string;
  nombres: string;
  apellidos: string;
  libretaUniversitaria: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombreUsuario: string;
}

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {
  alumno: Alumno;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private appComponent: AppComponent) { 
      this.alumno = new Alumno();
    }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario !== undefined && usuario !== null && usuario !== '') {
      this.http.get<Alumno>('https://localhost:44374/alumno/get-by-id?idAlumno=' + usuario).subscribe(x => {
        this.alumno = x;
      });
    } else {
      this.alumno = new Alumno();
    }
  }

  onSubmit(form: NgForm) {
    const data = new Alumno();
    data.apellidos = this.alumno.apellidos;
    data.email = this.alumno.email;
    data.libretaUniversitaria = this.alumno.libretaUniversitaria;
    data.nombreUsuario = this.alumno.nombreUsuario;
    data.nombres = this.alumno.nombres;
    data.numeroDocumento = this.alumno.numeroDocumento;
    data.tipoDocumento = this.alumno.tipoDocumento;

    this.http.post('https://localhost:44374/Alumno', data)
      .subscribe((x: Alumno) => {
        alert('Alumno Creado!');
        localStorage.setItem('usuario', JSON.stringify(x.id));
        localStorage.setItem('usuarioNombre', JSON.stringify(x.nombres + ' ' + x.apellidos));
        this.appComponent.iniciarUsuario(x);
      }, error => {
        alert('Ya existe un usuario con ese nombre!');
      });
  }

  isDisabled(): boolean {
    return this.alumno.nombres !== null && this.alumno.nombres !== '' && this.alumno.nombres !== undefined &&
    this.alumno.apellidos !== null && this.alumno.apellidos !== '' && this.alumno.apellidos !== undefined &&
    this.alumno.nombreUsuario !== null && this.alumno.nombreUsuario !== '' && this.alumno.nombreUsuario !== undefined;
  }
}
