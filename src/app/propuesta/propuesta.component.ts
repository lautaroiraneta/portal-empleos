import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { HelperService, ExperienciaLaboral, Conocimiento } from '../helper.service';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral[] = [{
    puesto: [{ id: '1', nombre: 'Puesto 1 ' }],
    anosExperiencia: '2'
  },
  {
    puesto: [{ id: '1', nombre: 'Puesto 1 ' }],
    anosExperiencia: '4'
  }];

  conocimiento: Conocimiento[] = [
    {
      conocimiento: [{ id: '2', nombre: '.NET' }],
      anosExperiencia: '2'
    }
  ];

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
    descripcion: 'AGREGAR RICH TEXT',
    preferencias: {
      edadMinima: 20,
      edadMaxima: 25,
      lugarResidencia: [
        { id: '1', nombre: 'Capital Federal' },
        { id: '2', nombre: 'GBA Sur' }
      ],
      disponibilidadReubicacion: true,
      habilidadesPersonales: 'Proactivo, etc.',
      cantidadMateriasAprobadas: 20,
      porcentajeCarreraCompletada: 80,
      promedioMinimo: 7.50,
      anoCarrera: 4,
      experienciaLaboral: this.experienciaLaboral,
      conocimientos: this.conocimiento,
      conocimientosExtra: []
    }
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
  conocimientos: any;
  conocimientosExtra: any;
  
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
    this.conocimientos = this.helperService.conocimientos;
    this.conocimientosExtra = this.helperService.conocimientosExtra;
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

  agregarExperienciaLaboral() {
    let experienciaLaboral: ExperienciaLaboral = {
      puesto: [],
      anosExperiencia: ''
    };

    this.propuesta.preferencias.experienciaLaboral.push(experienciaLaboral);
  }

  agregarConocimiento() {
    let conocimiento: Conocimiento = {
      conocimiento: [],
      anosExperiencia: ''
    };

    this.propuesta.preferencias.conocimientos.push(conocimiento);
  }
}
