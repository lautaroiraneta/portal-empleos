import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postAlumno(this.carrera).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }
}
