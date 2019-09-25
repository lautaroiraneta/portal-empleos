import { Component, OnInit } from '@angular/core';
import { Email } from '../crear-perfil/crear-perfil.component';

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
  alumno: Alumno = {
    nombres: 'Lautaro',
    apellidos: 'Irañeta',
    libretaUniversitaria: '1018944',
    email: {
      email: 'lautaroiraneta@gmail.com',
      id: '1'
    },
    tipoDocumento: 'DNI',
    numeroDocumento: '35.941.589',
    nombreUsuario: 'lautaro.iraneta'
  }

  constructor() { }

  ngOnInit() {
  }

}
