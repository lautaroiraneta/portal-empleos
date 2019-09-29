import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia = {
    titulo: 'Título',
    cuerpo: 'hola hoahoahoahoahoahoohaohaoaohoahoaohoahoaohohaoaoh',
    fecha: '02/02/2019',
    imagen: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form);
    
  }
}
