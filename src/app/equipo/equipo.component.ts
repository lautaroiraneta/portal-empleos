import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipo = {
    nombre: 'Nombre equipo',
    usuarios: [
      { id: '2', nombre: 'Abel Leguizamón Espínola' },
      { id: '6', nombre: 'Antonia Nieto' },
      { id: '7', nombre: 'Jacobo Degrom' }
    ]
  };

  usuarios = [
    { id: '1', nombre: 'Valeria Benítez' },
    { id: '2', nombre: 'Abel Leguizamón Espínola' },
    { id: '3', nombre: 'Roberto Rodríguez' },
    { id: '4', nombre: 'Juan Manuel Gutiérrez' },
    { id: '5', nombre: 'Florencia Lotitto' },
    { id: '6', nombre: 'Antonia Nieto' },
    { id: '7', nombre: 'Jacobo Degrom' }
  ];

  funciones = [
    { id: '1', nombre: 'Crear Micrositio' },
    { id: '2', nombre: 'Agregar Noticia a Micrositio' },
    { id: '3', nombre: 'Crear Propuesta' },
    { id: '4', nombre: 'Estadísticas' }
  ];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('equipo: ' + JSON.stringify(this.equipo));
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }
}
