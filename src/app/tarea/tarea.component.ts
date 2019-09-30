import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  tarea = {
    nombre: 'nombre',
    descripcion: 'descripcion',
    usuarioResponsable: { id: '2', nombre: 'Martin P.' },
    tareasPredecesoras: [
      { id: '3', nombre: 'Tarea 3' }
    ],
    tareasSucesoras: [
      { id: '1', nombre: 'Tarea 1' },
      { id: '2', nombre: 'Tarea 2' }
    ],
    fechaFinalizacion: { isRange: false, singleDate: { jsDate: new Date(2019, 1, 3) } }
  }

  usuarios = [
    { id: '1', nombre: 'Lautaro J.' },
    { id: '2', nombre: 'Martin P.' },
    { id: '3', nombre: 'Tom Brady' },
    { id: '4', nombre: 'Jeff McNeil' }
  ];

  tareas = [
    { id: '1', nombre: 'Tarea 1' },
    { id: '2', nombre: 'Tarea 2' },
    { id: '3', nombre: 'Tarea 3' },
    { id: '4', nombre: 'Tarea 4' }
  ];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
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

  onUsuarioResponsableChange() {
    this.tarea.usuarioResponsable.nombre = this.usuarios.find(x => x.id === this.tarea.usuarioResponsable.id).nombre;
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('tarea: ' + JSON.stringify(this.tarea));
  }
}
