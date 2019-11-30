import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { HelperService, ExperienciaLaboral, Conocimiento } from '../helper.service';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { Puesto } from '../crear-perfil/crear-perfil.component';
import { DataService } from '../data/data.service';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';

export class Propuesta {
  titulo: string;
  puestosCarac: Puesto[];
  carreras: IdValor[];
  carrerasAfines: boolean;
}

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {
  puestosLaborales: Puesto[] = [];
  mostrarWell: boolean = false;
  newPuesto: string;
  carreras: IdValor[] = [];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true
  };

  dropdownSettingsIdValor: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true
  };

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

  propuesta: Propuesta;

  dropdownSettingsSingle: IDropdownSettings;
  puestos: any;
  lugares: any;
  tiposEmpleo: any;
  turnos: any;
  myDpOptions: IAngularMyDpOptions;
  numeroPaso: number;
  conocimientos: any;
  conocimientosExtra: any;

  constructor(private helperService: HelperService, private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.propuesta = new Propuesta();
    this.dropdownSettingsSingle = this.helperService.dropdownSettingsSingle;
    this.dataService.getPuestos().subscribe(x => {
      this.puestosLaborales = x;
    });

    this.dataService.getCarreras().subscribe(x => {
      this.carreras = x;
    });

    this.lugares = this.helperService.lugares;
    this.tiposEmpleo = this.helperService.tiposEmpleo;
    this.turnos = this.helperService.turnos;
    this.myDpOptions = this.helperService.myDpOptions;
    this.numeroPaso = 1;
    this.conocimientos = this.helperService.conocimientos;
    this.conocimientosExtra = this.helperService.conocimientosExtra;
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

  }

  agregarConocimiento() {
    let conocimiento: Conocimiento = {
      conocimiento: [],
      anosExperiencia: ''
    };

  }

  onSubmit(form: NgForm) {
    if (this.numeroPaso === 2) {
      let data = new Propuesta();
      data.titulo = this.propuesta.titulo;
      data.puestosCarac = this.propuesta.puestosCarac;
      data.carreras = this.propuesta.carreras;
      data.carrerasAfines = this.propuesta.carrerasAfines;
      
      console.log(data);

      this.http.post('https://localhost:44374/Propuesta', data).subscribe(x => {
        alert('Propuesta Creada!');
      });
    }
  }

  guardarNewPuesto() {
    let data = new Puesto();
    data.nombre = this.newPuesto;
    if (this.newPuesto !== "" && this.newPuesto !== undefined) {
      this.http.post('https://localhost:44374/Puesto', data).subscribe(x => {
        this.newPuesto = '';
        this.mostrarWell = false;
        this.dataService.getPuestos().subscribe(x => {
          this.puestosLaborales = x;
        });
        alert('Puesto Agregado!');
      });
    }
  }
}
