import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-conocimientos',
  templateUrl: './agregar-conocimientos.component.html',
  styleUrls: ['./agregar-conocimientos.component.css']
})
export class AgregarConocimientosComponent implements OnInit {
  conocimientos = [
    { id: '1', nombre: 'Java' },
    { id: '2', nombre: '.NET' },
    { id: '3', nombre: 'Hibernate' },
    { id: '4', nombre: 'WebServices' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
