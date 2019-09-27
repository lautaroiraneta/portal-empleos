import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materia = {
    nombre: 'Materia Nombre',
    codigo: 'Código Materia',
    carreras: [
      { id: '2', nombre: 'Licenciatura en Informática' }
    ],
    conocimientos: []
  }
  carrerasItems = [
    { id: '1', nombre: 'Ingeniería en Informática' },
    { id: '2', nombre: 'Licenciatura en Informática' }
  ];
  conocimientosItems = [
    { id: '1', nombre: 'Conocimiento 1' },
    { id: '2', nombre: 'Conocimiento 2' }
  ]
 
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
