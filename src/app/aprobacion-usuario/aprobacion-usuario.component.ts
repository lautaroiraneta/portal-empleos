import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprobacion-usuario',
  templateUrl: './aprobacion-usuario.component.html',
  styleUrls: ['./aprobacion-usuario.component.css']
})
export class AprobacionUsuarioComponent implements OnInit {
  usuarios = [{
    nombre: 'Celeste Newman',
    tipo: 'Alumno',
    fechaIngreso: '13/02/2019',
    aprobado: null
  }, {
    nombre: 'xNova',
    tipo: 'Empresa',
    fechaIngreso: '15/02/2019',
    aprobado: null
  }, {
    nombre: 'Wilson Ramos',
    tipo: 'Alumno',
    fechaIngreso: '19/02/2019',
    aprobado: null
  }]

  constructor() { }

  ngOnInit() {
  }

}
