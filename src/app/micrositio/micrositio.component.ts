import { Component, OnInit } from '@angular/core';
import { RedesSociales } from '../crear-perfil/crear-perfil.component';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Micrositio {
  descripcion: string;
  redesSociales: RedesSociales = new RedesSociales();
  sitioWeb: string;
}

@Component({
  selector: 'app-micrositio',
  templateUrl: './micrositio.component.html',
  styleUrls: ['./micrositio.component.css']
})

export class MicrositioComponent implements OnInit {
  micrositio: Micrositio;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.micrositio = new Micrositio();
  }

  onSubmit(form: NgForm) {
    let data = new Micrositio();
    data.descripcion = this.micrositio.descripcion;
    data.redesSociales = this.micrositio.redesSociales;
    data.sitioWeb = this.micrositio.sitioWeb;

    this.http.post('https://localhost:44374/Micrositio', data).subscribe(x => {
      alert('Micrositio Creado!');
    });
  }    
}
