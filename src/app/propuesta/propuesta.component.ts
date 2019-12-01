import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { HelperService, ExperienciaLaboral, Conocimiento } from '../helper.service';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { Puesto } from '../crear-perfil/crear-perfil.component';
import { DataService } from '../data/data.service';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';

export class Propuesta {
  titulo: string;
  puestosCarac: Puesto[];
  carreras: IdValor[];
  carrerasAfines: boolean;
  pais: IdValor[];
  provincia: IdValor[];
  zona: IdValor[];
  ciudad: IdValor[];
  localidad: IdValor[];
  sueldoBruto: number;
  tipoEmpleo: IdValor[];
  turno: IdValor[];
  beneficios: string;
  descripcion: string;
  fechaFinalizacion: IMyDateModel;
  fechaFinalizacionDT: Date;
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

  dropdownSettingsPuesto: IDropdownSettings = {
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

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
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
  paises: IdValor[];
  provincias: IdValor[];
  zonas: IdValor[];
  ciudades: IdValor[];
  localidades: IdValor[];

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
    this.dataService.getPuestos().subscribe(x => {
      this.puestosLaborales = x;
    });

    this.dataService.getCarreras().subscribe(x => {
      this.carreras = x;
    });

    this.dataService.getPaises().subscribe(x => {
      this.paises = x;
    });

    this.dataService.getProvincias().subscribe(x => {
      this.provincias = x;
    });

    this.dataService.getZonas().subscribe(x => {
      this.zonas = x;
    });

    this.lugares = this.helperService.lugares;
    this.tiposEmpleo = this.helperService.tiposEmpleo;
    this.turnos = this.helperService.turnos;
    this.myDpOptions = this.helperService.myDpOptions;
    this.numeroPaso = 1;
    this.conocimientos = this.helperService.conocimientos;
    this.conocimientosExtra = this.helperService.conocimientosExtra;
    this.propuesta.fechaFinalizacion = { isRange: false, singleDate: { jsDate: new Date() } };
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
      data.pais = this.propuesta.pais;
      data.provincia = this.propuesta.provincia;
      data.zona = this.propuesta.zona;
      data.ciudad = this.propuesta.ciudad;
      data.localidad = this.propuesta.localidad;
      data.sueldoBruto = this.propuesta.sueldoBruto;
      data.tipoEmpleo = this.propuesta.tipoEmpleo;
      data.turno = this.propuesta.turno;
      data.beneficios = this.propuesta.beneficios;
      data.descripcion = this.propuesta.descripcion;
      data.fechaFinalizacionDT = this.propuesta.fechaFinalizacion.singleDate.date ?
        new Date(this.propuesta.fechaFinalizacion.singleDate.date.year, this.propuesta.fechaFinalizacion.singleDate.date.month - 1, this.propuesta.fechaFinalizacion.singleDate.date.day) : new Date();
      
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

  onItemSelectZona(item: any) {
    this.dataService.getCiudades(this.propuesta.provincia[0].id, item.id).subscribe(x => {
      this.ciudades = x;
    });
  }

  onItemSelectCiudad(item: any) {
    this.dataService.getLocalidades(item.id).subscribe(x => {
      this.localidades = x;
    });
  }
}
