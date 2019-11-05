import { Component, OnInit } from '@angular/core';
import { Email } from '../helper.service';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from './alumno-service/alumno.service';

export interface Alumno {
  nombres: string;
  apellidos: string;
  libretaUniversitaria: string;
  email: Email;
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
  alumno: any;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id !== 'new') {
      this.alumno = this.alumnoService.getById(id);
    }
  }

}
