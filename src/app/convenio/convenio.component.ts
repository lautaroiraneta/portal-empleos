import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  convenio = {
    empresa: 'Empresa ABC',
    nombre: 'nombre Convenio',
    facultad: [
      { id: '2', nombre: 'Facultad de Ciencias Económicas' }
    ],
    generarParaUniversidad: true,
    duracionMinima: 6,
    duracionMaxima: 8,
    plazoRenovacion: 4,
    cantidadHoras: 160,
    inicioVigencia: { isRange: false, singleDate: { jsDate: new Date(2018, 3, 20) } },
    finVigencia: { isRange: false, singleDate: { jsDate: new Date(2018, 7, 2) } },
    renovacionAutomatica: true,
    plazoExtension: 41,
    cantidadPasantes: 20
  };

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  facultades = [
    { id: '1', nombre: 'Facultad de Ingeniería' },
    { id: '2', nombre: 'Facultad de Ciencias Económicas' },
    { id: '3', nombre: 'Facultad de Informática' }
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
    console.log('convenio: ' + JSON.stringify(this.convenio));
  }
}
