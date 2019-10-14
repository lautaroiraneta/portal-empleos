import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { HelperService } from '../helper.service';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  propuesta = {
    titulo: 'Titulo de la Propuesta',
    puestos: [
      { id: '3', nombre: 'Puesto 3' }
    ],
    carreras: [
      { id: '3', nombre: 'Traductor Público' },
      { id: '4', nombre: 'Abogacía' }
    ],
    carrerasAfines: true,
    lugar: [
      { id: '1', nombre: 'Capital Federal' }
    ],
    sueldoBruto: '$ 10000',
    tipoEmpleo: [
      { id: 'full', nombre: 'Full-Time' }
    ],
    turno: [
      { id: 'm', nombre: 'Mañana' }
    ],
    beneficios: 'Home Office, Snacks, Fruta, Medialunas los Viernes',
    fechaFinalizacion: { isRange: false, singleDate: { jsDate: new Date(2019, 1, 3) } },
    descripcion: 'AGREGAR RICH TEXT'
  };

  dropdownSettings: IDropdownSettings;
  dropdownSettingsSingle: IDropdownSettings;
  puestos: any;
  carreras: any;
  lugares: any;
  tiposEmpleo: any;
  turnos: any;
  myDpOptions: IAngularMyDpOptions;
  numeroPaso: number;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.dropdownSettings = this.helperService.dropdownSettings;
    this.dropdownSettingsSingle = this.helperService.dropdownSettingsSingle;
    this.puestos = this.helperService.puestos;
    this.carreras = this.helperService.carreras;
    this.lugares = this.helperService.lugares;
    this.tiposEmpleo = this.helperService.tiposEmpleo;
    this.turnos = this.helperService.turnos;
    this.myDpOptions = this.helperService.myDpOptions;
    this.numeroPaso = 1;
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('propuesta: ' + JSON.stringify(this.propuesta));
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }
}
