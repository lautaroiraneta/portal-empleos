import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  password: string;
}

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})

export class AlumnoComponent implements OnInit {
  alumno: Alumno;

  constructor(
    private router: Router,
    private http: HttpClient,
    private appComponent: AppComponent) { 
      this.alumno = new Alumno();
    }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario !== undefined && usuario !== null && usuario.alumnoId !== null && usuario.alumnoId !== undefined) {
      this.http.get<Alumno>('https://localhost:44374/alumno/get-by-id?idAlumno=' + usuario.alumnoId).subscribe(x => {
        this.alumno = x;
      });
    } else {
      this.alumno = new Alumno();
    }
  }

  onSubmit(form: NgForm) {
    let data = new Alumno();
    data.apellidos = this.alumno.apellidos;
    data.email = this.alumno.email;
    data.libretaUniversitaria = this.alumno.libretaUniversitaria;
    data.nombreUsuario = this.alumno.nombreUsuario;
    data.nombres = this.alumno.nombres;
    data.numeroDocumento = this.alumno.numeroDocumento;
    data.tipoDocumento = this.alumno.tipoDocumento;
    data.password = this.alumno.password;

    this.http.post('https://localhost:44374/Alumno', data)
      .subscribe((x: Alumno) => {
        alert('Alumno Creado! Espere la aprobación de la Universidad para poder ingresar.');
        this.router.navigate(['login']);
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
