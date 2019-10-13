import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-etapa-pasantia-curso',
  templateUrl: './etapa-pasantia-curso.component.html',
  styleUrls: ['./etapa-pasantia-curso.component.css']
})
export class EtapaPasantiaCursoComponent implements OnInit {
  etapa = {
    alumno: 'Juan Giménez',
    empresa: 'YPF',
    inicioPasantia: { isRange: false, singleDate: { jsDate: new Date(2019, 6, 1) } },
    periodicidadInformes: 30,
    periodicidadPago: [
      { id: '2', nombre: 'Mensual' }
    ]
  };

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  periodicidades = [
    { id: '1', nombre: 'Semanal' },
    { id: '2', nombre: 'Mensual' },
    { id: '3', nombre: 'Por Única Vez' },
    { id: '4', nombre: 'No Aplica' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
