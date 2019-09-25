import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Carrera {
  nombre: string;
  codigo: string;
}

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  carrera = {
    nombre: 'Carrera',
    codigo: 'Código'
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }
}
