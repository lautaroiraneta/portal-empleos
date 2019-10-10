import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-conocimientos-puestos',
  templateUrl: './control-conocimientos-puestos.component.html',
  styleUrls: ['./control-conocimientos-puestos.component.css']
})
export class ControlConocimientosPuestosComponent implements OnInit {
  isCollapsedTipoDeRegistro = true;
  isCollapsedEstado = true;
  isCollapsedFechaDeCarga = true;
  isCollapsedUltimaModificacion = true;

  mostrarConocimientos = true;
  mostrarPuestos = true;

  mostrarValidos = true;
  mostrarInvalidos = true;
  mostrarPendientes = true;
  filtroNombre = '';

  conocimientos = [
    {
      nombre: 'Java',
      tipo: 'c',
      estado: 'p',
      fechaCarga: '27/10/2018',
      ultimaModificacion: '30/10/2018'
    },
    {
      nombre: 'SQL',
      tipo: 'c',
      estado: 'v',
      fechaCarga: '27/10/2018',
      ultimaModificacion: '30/10/2018'
    },
    {
      nombre: 'Paquete Ofice',
      tipo: 'c',
      estado: 'i',
      fechaCarga: '27/11/2018',
      ultimaModificacion: '02/11/2018'
    },
    {
      nombre: 'Analista Comercial',
      tipo: 'p',
      estado: 'p',
      fechaCarga: '01/10/2018',
      ultimaModificacion: '25/10/2018'
    }
  ];

  items = this.conocimientos;
  constructor() { }

  ngOnInit() {
  }

  getTipoNombre(id: string): string {
    switch (id) {
      case 'c':
        return 'Conocimiento';
      case 'p':
        return 'Puesto de Trabajo';
      default:
        return 'Conocimiento';
    }
  }

  getEstadoNombre(id: string): string {
    switch (id) {
      case 'i':
        return 'Inválido';
      case 'p':
      default:
        return 'Pendiente de Validar';
      case 'v':
        return 'Válido';
    }
  }

  actualizarItems() {
    this.items = this.conocimientos.filter(x => {
      return ((x.tipo === 'c' && this.mostrarConocimientos) || (x.tipo === 'p' && this.mostrarPuestos)) 
        &&
        ((x.estado === 'v' && this.mostrarValidos) || (x.estado === 'i' && this.mostrarInvalidos) || (x.estado === 'p' && this.mostrarPendientes))
        &&
        (x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined))
    });
  }
}
