import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertencia-list',
  templateUrl: './advertencia-list.component.html',
  styleUrls: ['./advertencia-list.component.css']
})
export class AdvertenciaListComponent implements OnInit {
  advertencias = [
    { id: '1', nombre: 'Java', tipo: 'Conocimiento', fechaInvalidacion: '30/10/2018', razon: 'Usar "Lenguaje Java" en su lugar' },
    { id: '2', nombre: 'SQL', tipo: 'Conocimiento', fechaInvalidacion: '30/10/2018', razon: 'Usar Lenguaje SQL' },
    { id: '3', nombre: 'Analista Omercial', tipo: 'Puesto de Trabajo', fechaInvalidacion: '25/10/2018', razon: 'Puesto Inválido' }
  ];

  isCollapsedTipo: boolean = true;
  isCollapsedFechaInvalidacion: boolean = true;
  filtroNombre: string = '';
  items: any;

  constructor() { }

  ngOnInit() {
    this.items = this.advertencias;
  }

  actualizarItems() {
    this.items = this.advertencias.filter(x => {
      return (
        x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
        ||
        (x.razon.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined))
      )
    });
  }
}
