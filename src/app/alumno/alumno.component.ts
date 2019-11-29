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
    private appComponent: AppComponent) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id !== 'new') {
      // this.alumno = this.alumnoService.getById(id);
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
        this.appComponent.iniciarUsuario(x);
      });
  }
}
