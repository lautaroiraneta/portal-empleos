import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-subtarea',
  templateUrl: './subtarea.component.html',
  styleUrls: ['./subtarea.component.css']
})
export class SubtareaComponent implements OnInit {

  subtarea = {
    nombre: 'Subtarea',
    descripcion: 'Descripciónnnnnn',
    usuarioResponsable: { id: '2', nombre: 'Martin P.' },
    fechaFinalizacion: { isRange: false, singleDate: { jsDate: new Date(2019, 1, 3) } }
  }

  usuarios = [
    { id: '1', nombre: 'Lautaro J.' },
    { id: '2', nombre: 'Martin P.' },
    { id: '3', nombre: 'Tom Brady' },
    { id: '4', nombre: 'Jeff McNeil' }
  ];

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

  onUsuarioResponsableChange() {
    this.subtarea.usuarioResponsable.nombre = this.usuarios.find(x => x.id === this.subtarea.usuarioResponsable.id).nombre;
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('subtarea: ' + JSON.stringify(this.subtarea));
  }
}
