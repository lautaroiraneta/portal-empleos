import { Component, OnInit } from '@angular/core';
import { Email } from '../helper.service';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from './alumno-service/alumno.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Alumno {
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
    private alumnoService: AlumnoService,
    private http: HttpClient) { }

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
      .subscribe(x => {
        alert('Alumno Creado!');
      });
  }
}
