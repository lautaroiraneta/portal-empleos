import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia = {
    titulo: 'Título',
    cuerpo: 'hola hoahoahoahoahoahoohaohaoaohoahoaohoahoaohohaoaoh',
    fecha: { isRange: false, singleDate: { jsDate: new Date(2019, 1, 3) } },
    imagen: undefined
  }

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

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form);
    console.log('noticia: ' + JSON.stringify(this.noticia));
    
  }

  handleFileInput(files: FileList) {
    console.log('files: ' + files);
    if (files.item(0)) {
      this.noticia.imagen = files.item(0).name;
    }
    console.log(this.noticia.imagen);
  }
}
