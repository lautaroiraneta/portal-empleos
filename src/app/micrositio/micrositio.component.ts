import { Component, OnInit } from '@angular/core';
import { RedesSociales } from '../crear-perfil/crear-perfil.component';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

export class Micrositio {
  descripcion: string;
  redesSociales: RedesSociales = new RedesSociales();
  sitioWeb: string;
  empresaId: string;
}

@Component({
  selector: 'app-micrositio',
  templateUrl: './micrositio.component.html',
  styleUrls: ['./micrositio.component.css']
})

export class MicrositioComponent implements OnInit {
  micrositio: Micrositio;
  usuario: Usuario;

  constructor(private http: HttpClient) { 
    this.micrositio = new Micrositio();
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.micrositio = new Micrositio();
    this.micrositio.empresaId = this.usuario.empresaId;

  }

  onSubmit(form: NgForm) {
    let data = new Micrositio();
    data.descripcion = this.micrositio.descripcion;
    data.redesSociales = this.micrositio.redesSociales;
    data.sitioWeb = this.micrositio.sitioWeb;
    data.empresaId = this.micrositio.empresaId;

    this.http.post('https://localhost:44374/Micrositio', data).subscribe(x => {
      alert('Micrositio Creado!');
    });
  }    
}
