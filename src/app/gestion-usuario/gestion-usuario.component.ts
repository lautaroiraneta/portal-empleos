import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {
  usuarios = [{
    nombre: 'Rosario Martínez',
    usuario: 'ros.martinez',
    fechaIngreso: '13/02/2019'
  }, {
    nombre: 'Darío Pérez',
    usuario: 'dario.perez1',
    fechaIngreso: '16/02/2019'
  }, {
    nombre: 'Mariela Sánchez',
    usuario: 'm.sanchez',
    fechaIngreso: '19/02/2019'
  }];

  filtro = '';
  items: any;

  constructor() { }

  ngOnInit() {
    this.items = this.usuarios;
  }

  filtrar() {
    this.items = this.usuarios.filter(x =>
      (x.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        x.usuario.toLowerCase().includes(this.filtro.toLowerCase())) &&
      (this.filtro !== '' || this.filtro !== undefined))
  }

}
