import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acuerdo-individual',
  templateUrl: './acuerdo-individual.component.html',
  styleUrls: ['./acuerdo-individual.component.css']
})
export class AcuerdoIndividualComponent implements OnInit {
  acuerdo = {
    alumno: {
      nombre: 'Juan Jiménez'
    },
    empresa: {
      nombre: 'YPF'
    },
    nombre: 'Acuerdo 1',
    docenteGuia: [
      { id: '2', nombre: 'Jeff McNeil' }
    ],
    tutor: [
      { id: '1', nombre: 'Brandon Nimmo' }
    ],
    duracion: '6',
    horarios: {
      lunes: { entrada: '12:45 AM', salida: '11:45 AM'}, 
      martes: { entrada: '02:40 AM', salida: '11:00 PM'}, 
      miercoles: { entrada: '08:00 AM', salida: '06:00 PM'}, 
      jueves: { entrada: '10:00 AM', salida: '04:00 PM'}, 
      viernes: { entrada: '10:30 AM', salida: '04:30 PM'}, 
      sabado: { entrada: '10:45 AM', salida: '04:45 PM'}, 
      domingo: { entrada: '11:00 AM', salida: '05:00 PM'}, 
    },
    tareas: [
      'Tarea 1',
      'Tarea 2'
    ]
  };

  docentes = [
    { id: '1', nombre: 'Amed Rosario' },
    { id: '2', nombre: 'Jeff McNeil' },
    { id: '3', nombre: 'Robinson Canó' },
    { id: '4', nombre: 'Michael Conforto' }
  ];

  tutores = [
    { id: '1', nombre: 'Brandon Nimmo' },
    { id: '2', nombre: 'Wilson Ramos' },
    { id: '3', nombre: 'Noah Syndergaard' },
    { id: '4', nombre: 'Steven Matz' }
  ]

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('acuerdo: ' + JSON.stringify(this.acuerdo));
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  agregarTarea() {
    this.acuerdo.tareas.push('');
  }
}
