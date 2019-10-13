import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-etapa-definicion-convenio',
  templateUrl: './etapa-definicion-convenio.component.html',
  styleUrls: ['./etapa-definicion-convenio.component.css']
})
export class EtapaDefinicionConvenioComponent implements OnInit {
  etapa = {
    nombre: 'nombre',
    empresa: [
      { id: '5', nombre: 'Valve' }
    ]
  };

  empresas = [
    { id: '1', nombre: 'YPF' },
    { id: '2', nombre: 'MercadoLibre' },
    { id: '3', nombre: 'Thomson Reuters' },
    { id: '4', nombre: 'MLB' },
    { id: '5', nombre: 'Valve' }
  ];

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
    console.log('etapa: ' + JSON.stringify(this.etapa));
  }
}
