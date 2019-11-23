import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class Carrera {
  nombre: string;
  codigo: string;
}

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  carrera: Carrera = {
    nombre: undefined,
    codigo: undefined
  }

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    const data = new Carrera();
    data.nombre = this.carrera.nombre;
    data.codigo = this.carrera.codigo;

    this.http.post('https://localhost:44374/Carrera', data)
      .subscribe(x => {
        alert('Carrera Creada!');
        this.carrera.nombre = undefined;
        this.carrera.codigo = undefined;
      });
  }
}
