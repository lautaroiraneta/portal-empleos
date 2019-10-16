import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {
  preferencia = {
    nombre: 'nombre',
    puestosTrabajo: [
        { id: '2', nombre: 'Analista' }
    ],
    puestosTrabajoExcluyente: false,
    sueldoPretendido: '$ 10000',
    sueldoPretendidoExcluyente: false,
    tiposEmpleo: [],
    tiposEmpleoExcluyente: false,
    turnos: [],
    turnosExcluyente: false,
    lugares: [],
    lugaresExcluyente: false
  };

  numeroPaso = 1;

  puestosTrabajo = [
    { id: '1', nombre: 'Desarrollador' },
    { id: '2', nombre: 'Analista' }
  ];

  tiposEmpleo = [
    { id: 'full', nombre: 'Full-Time' },
    { id: 'part', nombre: 'Part-Time' },
    { id: 'pasantia', nombre: 'Pasantía' }
  ];

  turnos = [
    { id: 'm', nombre: 'Mañana' },
    { id: 't', nombre: 'Tarde' },
    { id: 'n', nombre: 'Noche' }
  ];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  dropdownSettingsNoSearch: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: false
  };

  constructor() { }

  ngOnInit() {
  }

  concatenarSignoPesos() {
    if (this.preferencia.sueldoPretendido !== null && this.preferencia.sueldoPretendido !== ''){
      if (this.preferencia.sueldoPretendido[0] !== '$') {
        this.preferencia.sueldoPretendido = '$ '.concat(this.preferencia.sueldoPretendido);
      }
    }   
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('preferencia: ' + JSON.stringify(this.preferencia));
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  mostrarValores(list: any): string {
    return list.map((x: any) => x.nombre).join('; ');
  }
}
