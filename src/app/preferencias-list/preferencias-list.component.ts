import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferencias-list',
  templateUrl: './preferencias-list.component.html',
  styleUrls: ['./preferencias-list.component.css']
})
export class PreferenciasListComponent implements OnInit {
  preferencias = [{
    nombre: 'Analista Comercial, Pasantía, Mañana',
    activo: false
  }, {
    nombre: 'Liquidación de Sueldos, Full-Time, Zona Sur',
    activo: true
  }, {
    nombre: 'Programador, Part-Time, Pasantía, Tarde',
    activo: false
  }, {
    nombre: 'Ayudante de Chef, Cocinero Auxiliar, Full-Time, Capital Federal',
    activo: false
  }];

  constructor() { }

  ngOnInit() {
  }

  activar(preferencia: any) {
    this.desactivar();
    preferencia.activo = true;
  }

  desactivar() {
    for (let p of this.preferencias) {
      if (p.activo) {
        p.activo = false;
      }
    }
  }

  eliminar(preferencia: any) {
    this.preferencias = this.preferencias.filter(x => x.nombre !== preferencia.nombre);
  }

}
