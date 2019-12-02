import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { HelperService } from '../helper.service';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { Puesto, Conocimiento } from '../crear-perfil/crear-perfil.component';
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

  edadMin: number;
  edadMax: number;
  disponibilidadReubicacion: boolean;
  habilidadesPersonales: string;
  cantidadMatApr: number;
  promedio: number;
  anioCursada: number;
  porcentajeMatApr: number;
  puestos: ExpLaboral[] = [];
  conocimientos: Conoc[] = [];
  conocimientosExtra: Conocimiento[];
  
  excluyenteEdadMin: boolean;
  excluyenteEdadMax: boolean;
  excluyentePorc: boolean;
  excluyenteMatApr: boolean;
  excluyentePromedio: boolean;
  excluyenteAnioCursada: boolean;
}

export class ExpLaboral {
  puesto: IdValor[];
  aniosExperiencia: number;
}

export class Conoc {
  conocimiento: Conocimiento[];
  aniosExperiencia: number;
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
  newConocimiento: string;
  carreras: IdValor[] = [];
  mostrarWellConocimiento: boolean = false;

  dropdownSettingsPuesto: IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };

  dropdownSettingsConocMulti: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 6,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
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

  propuesta: Propuesta;
  paises: IdValor[];
  provincias: IdValor[];
  zonas: IdValor[];
  ciudades: IdValor[];
  localidades: IdValor[];

  tiposEmpleo: IdValor[];
  turnos: IdValor[];
  myDpOptions: IAngularMyDpOptions;
  numeroPaso: number;
  conocimientos: Conocimiento[];
  conocimientosExtra: any;

  constructor(private helperService: HelperService, private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.propuesta = new Propuesta();
    this.propuesta.fechaFinalizacion = { isRange: false, singleDate: { jsDate: new Date() } };
    this.propuesta.conocimientos.push(new Conoc());
    this.propuesta.puestos.push(new ExpLaboral());

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

    this.dataService.getConocimientos().subscribe(x => {
      this.conocimientos = x;
    });

    this.tiposEmpleo = this.helperService.tiposEmpleo;
    this.turnos = this.helperService.turnos;
    this.myDpOptions = this.helperService.myDpOptions;
    this.numeroPaso = 1;
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  agregarExperienciaLaboral() {
    this.propuesta.puestos.push(new ExpLaboral());
  }

  agregarConocimiento() {
    this.propuesta.conocimientos.push(new Conoc());
  }

  onSubmit(form: NgForm) {
    if (this.numeroPaso === 4) {
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
      data.edadMin = this.propuesta.edadMin;
      data.edadMax = this.propuesta.edadMax;
      data.disponibilidadReubicacion = this.propuesta.disponibilidadReubicacion;
      data.habilidadesPersonales = this.propuesta.habilidadesPersonales;
      data.cantidadMatApr = this.propuesta.cantidadMatApr;
      data.promedio = this.propuesta.promedio;
      data.porcentajeMatApr = this.propuesta.porcentajeMatApr;
      data.anioCursada = this.propuesta.anioCursada;
      data.puestos = this.propuesta.puestos;
      data.conocimientos = this.propuesta.conocimientos;
      data.conocimientosExtra = this.propuesta.conocimientosExtra;
      data.excluyenteEdadMin = this.propuesta.excluyenteEdadMin;
      data.excluyenteEdadMax = this.propuesta.excluyenteEdadMax;
      data.excluyentePorc = this.propuesta.excluyentePorc;
      data.excluyenteMatApr = this.propuesta.excluyenteMatApr;
      data.excluyentePromedio = this.propuesta.excluyentePromedio;
      data.excluyenteAnioCursada = this.propuesta.excluyenteAnioCursada;
      
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

  guardarNewConocimiento() {
    let data = new Conocimiento();
    data.nombre = this.newConocimiento;
    if (this.newConocimiento !== "" && this.newConocimiento !== undefined) {
      this.http.post('https://localhost:44374/Conocimiento', data).subscribe(x => {
        this.newConocimiento = '';
        this.mostrarWellConocimiento = false;
        this.dataService.getConocimientos().subscribe(x => {
          this.conocimientos = x;
        });
        alert('Conocimiento Agregado!');
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
