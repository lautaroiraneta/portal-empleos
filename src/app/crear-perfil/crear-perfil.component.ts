import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HelperService } from '../helper.service';
import { DataService } from '../data/data.service';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IdValor } from '../empresa/empresa.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class Perfil {
  id: string;
  nombre: string;
  apellido: string;
  emails: IdValor[] = [];
  telefonos: IdValor[] = [];
  paisResidencia: IdValor[];
  zona: IdValor[];
  ciudad: IdValor[];
  localidad: IdValor[];
  provinciaResidencia: IdValor[];
  estadoCivil: IdValor[];
  paisNacionalidad: IdValor[];
  tipoDocumento: string;
  documento: string;
  fechaNacimiento: IMyDateModel;
  fechaNacimientoDT: Date;
  redesSociales: RedesSociales = new RedesSociales();
  fotoPerfil: any;
  objetivoLaboral: string;
  interesesPersonales: string;
  alumno: string;
  experienciaLaboral: ExperienciaLaboral[];
  experienciaEducativa: ExperienciaEducativa[];
  idioma: Idioma[];
  otrosConocimientos: IdValor[];
  carrera: IdValor[];
  porcentajeMateriasAprobadas: number;
  cantidadMateriasAprobadas: number;
  promedio: number;
  anioCursada: number;
}

export class Puesto {
  id: string;
  nombre: string;
  estado: string;
}

export class Conocimiento {
  id: string;
  nombre: string;
  estado: string;
  excluyente: boolean;
}

export class ExperienciaLaboral {
  empresa: string;
  puestoLaboral: Puesto[];
  fechaDesde: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaDesdeDT: Date;
  fechaHasta: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaHastaDT: Date;
  actualmenteTrabajando: boolean;
  descripcion: string;
  conocimientos: Conocimiento[];
}

export class ExperienciaEducativa {
  institucion: string;
  titulo: string;
  tipoEstudio: IdValor[];
  estado: IdValor[];
  fechaDesde: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaDesdeDT: Date;
  fechaHasta: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaHastaDT: Date;
  actualmenteEstudiando: boolean;
  comentarios: string;
}

export class Idioma {
  nombreIdioma: IdValor[];
  nivelOral: IdValor[];
  nivelEscrito: IdValor[];
  comentarios: string;
}

export class RedesSociales {
  usuarioTwitter: string;
  mostrarFeedTwitter: boolean;
  usuarioFacebook: string;
  mostrarFeedFacebook: boolean;
  usuarioInstagram: string;
  mostrarFeedInstagram: boolean;
  usuarioLinkedIn: string;
  mostrarFeedLinkedIn: boolean;
}

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  paso: number = 1;
  mostrarWell: boolean = false;
  mostrarWellConocimiento: boolean = false;
  newPuesto: string;
  newConocimiento: string;

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  paises: IdValor[];
  zonas: IdValor[];
  ciudades: IdValor[];
  localidades: IdValor[];
  provincias: IdValor[];
  carreras: IdValor[];
  puestosLaborales: Puesto[];
  conocimientos: Conocimiento[];
  perfil: Perfil;
  idiomas: IdValor[];

  niveles = [
    { id: 'bas', valor: 'Básico' },
    { id: 'int', valor: 'Intermedio' },
    { id: 'ava', valor: 'Avanzado' }
  ]

  idioma: Idioma;

  tiposDocumento = [
    { id: '1', nombre: 'DNI' }
  ];

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  dropdownSettingsPL: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  dropdownSettingsConocimientos: IDropdownSettings = {
    singleSelection: false,
    closeDropDownOnSelection: false,
    idField: 'id',
    textField: 'nombre',
    enableCheckAll: false,
    itemsShowLimit: 5,
    allowSearchFilter: true
  };

  closeResult: string;

  experienciaLaboral: ExperienciaLaboral;

  experienciasEducativasTipos = [
    { id: 'pri', valor: 'Primario' },
    { id: 'sec', valor: 'Secundario' },
    { id: 'ter', valor: 'Terciario' },
    { id: 'uni', valor: 'Universitario' }
  ];

  estados = [
    { id: 'com', valor: 'Completo' },
    { id: 'enc', valor: 'En Curso' }
  ];

  experienciaEducativa: ExperienciaEducativa;

  estadosCivil = [{ id: '1', valor: 'Soltero' },
  { id: '2', valor: 'En Pareja' },
  { id: '3', valor: 'Casado' },
  { id: '4', valor: 'Divorciado' },
  { id: '5', valor: 'Viudo' }];

  constructor(
    private helperService: HelperService,
    private dataService: DataService,
    private modalService: NgbModal,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.perfil = new Perfil();
  }

  ngOnInit() {
    this.perfil = new Perfil();
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario);
    if (usuario !== undefined && usuario !== null && usuario.alumnoId !== null && usuario.alumnoId !== undefined) {
      this.http.get<Perfil>('https://localhost:44374/Perfil/perfil/get-by-alumno-id?alumnoId=' + usuario.alumnoId).subscribe(x => {
        if (x !== undefined && x !== null) {
          this.perfil = x;
          this.perfil.fechaNacimiento = { isRange: false, singleDate: { jsDate: new Date(this.perfil.fechaNacimientoDT) } };
          if (this.perfil.emails === null) {
            this.perfil.emails = [];
            this.perfil.emails.push({ id: 'new', valor: '' });
          }
          if (this.perfil.telefonos === null) {
            this.perfil.telefonos = [];
            this.perfil.telefonos.push({ id: 'new', valor: '' });
          }
        }
        else {
          
          this.perfil.emails.push({ id: 'new', valor: '' });
          this.perfil.telefonos.push({ id: 'new', valor: '' });
          this.perfil.experienciaLaboral = [];
          this.perfil.experienciaEducativa = [];
          this.perfil.idioma = [];
          this.perfil.alumno = usuario;
          this.perfil.fechaNacimiento = { isRange: false, singleDate: { jsDate: new Date() } };
        }
      });
    } else {
      this.perfil.emails.push({ id: 'new', valor: '' });
      this.perfil.telefonos.push({ id: 'new', valor: '' });
      this.perfil.experienciaLaboral = [];
      this.perfil.experienciaEducativa = [];
      this.perfil.idioma = [];
      this.perfil.alumno = usuario;
      this.perfil.fechaNacimiento = { isRange: false, singleDate: { jsDate: new Date() } };
    }

    this.dataService.getPaises().subscribe(x => {
      this.paises = x;
    });

    this.dataService.getZonas().subscribe(x => {
      this.zonas = x;
    });

    this.dataService.getProvincias().subscribe(x => {
      this.provincias = x;
    });

    this.dataService.getCarreras().subscribe(x => {
      this.carreras = x;
    });

    this.dataService.getConocimientos().subscribe(x => {
      this.conocimientos = x;
    });
  }

  agregarEmail() {
    this.helperService.agregarEmail(this.perfil.emails);
  }

  eliminarEmail(id: string) {
    this.perfil.emails = this.helperService.eliminarEmail(this.perfil.emails, id);
  }

  agregarTelefono() {
    this.helperService.agregarTelefono(this.perfil.telefonos);
  }

  eliminarTelefono(id: string) {
    this.perfil.telefonos = this.helperService.eliminarTelefono(this.perfil.telefonos, id);
  }

  openExperienciaLaboral(content) {
    this.dataService.getPuestos().subscribe(x => {
      this.puestosLaborales = x;
    });

    this.dataService.getConocimientos().subscribe(x => {
      this.conocimientos = x;
    });

    this.experienciaLaboral = new ExperienciaLaboral();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openExperienciaEducativa(content) {
    this.experienciaEducativa = new ExperienciaEducativa();

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openIdioma(content) {
    this.idioma = new Idioma();

    this.dataService.getIdiomas().subscribe(x => {
      this.idiomas = x;
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  saveIdioma() {
    this.perfil.idioma.push(this.idioma);
    this.modalService.dismissAll();
    console.log(this.perfil);
  }

  saveExperienciaLaboral() {
    this.experienciaLaboral.fechaDesdeDT = this.experienciaLaboral.fechaDesde.singleDate.date ?
      new Date(this.experienciaLaboral.fechaDesde.singleDate.date.year, this.experienciaLaboral.fechaDesde.singleDate.date.month - 1, this.experienciaLaboral.fechaDesde.singleDate.date.day) : new Date();
    this.experienciaLaboral.fechaHastaDT = this.experienciaLaboral.fechaHasta.singleDate.date ?
      new Date(this.experienciaLaboral.fechaHasta.singleDate.date.year, this.experienciaLaboral.fechaHasta.singleDate.date.month - 1, this.experienciaLaboral.fechaDesde.singleDate.date.day) : new Date();
    this.perfil.experienciaLaboral.push(this.experienciaLaboral);
    this.modalService.dismissAll();
  }

  saveExperienciaEducativa() {
    this.experienciaEducativa.fechaDesdeDT = this.experienciaEducativa.fechaDesde.singleDate.date ?
      new Date(this.experienciaEducativa.fechaDesde.singleDate.date.year, this.experienciaEducativa.fechaDesde.singleDate.date.month - 1, this.experienciaEducativa.fechaDesde.singleDate.date.day) : new Date();
    this.experienciaEducativa.fechaHastaDT = this.experienciaEducativa.fechaHasta.singleDate.date ?
      new Date(this.experienciaEducativa.fechaHasta.singleDate.date.year, this.experienciaEducativa.fechaHasta.singleDate.date.month - 1, this.experienciaEducativa.fechaDesde.singleDate.date.day) : new Date();
    this.perfil.experienciaEducativa.push(this.experienciaEducativa);
    console.log(this.perfil);
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelectZona(item: any) {
    this.dataService.getCiudades(this.perfil.provinciaResidencia[0].id, item.id).subscribe(x => {
      this.ciudades = x;
    });
  }

  onItemSelectCiudad(item: any) {
    this.dataService.getLocalidades(item.id).subscribe(x => {
      this.localidades = x;
    });
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

  onSubmit(form: NgForm) {
    if (this.paso === 6) {
      let data = new Perfil();
      data.nombre = this.perfil.nombre;
      data.apellido = this.perfil.apellido;
      data.paisResidencia = this.perfil.paisResidencia;
      data.zona = this.perfil.zona;
      data.ciudad = this.perfil.ciudad;
      data.localidad = this.perfil.localidad;
      data.emails = this.perfil.emails;
      data.telefonos = this.perfil.telefonos;
      data.provinciaResidencia = this.perfil.provinciaResidencia;
      data.fechaNacimientoDT = this.perfil.fechaNacimiento.singleDate.date ?
        new Date(this.perfil.fechaNacimiento.singleDate.date.year, this.perfil.fechaNacimiento.singleDate.date.month - 1, this.perfil.fechaNacimiento.singleDate.date.day) : new Date();
      data.estadoCivil = this.perfil.estadoCivil;
      data.paisNacionalidad = this.perfil.paisNacionalidad;
      data.tipoDocumento = this.perfil.tipoDocumento;
      data.documento = this.perfil.documento;
      data.redesSociales = this.perfil.redesSociales;
      data.objetivoLaboral = this.perfil.objetivoLaboral;
      data.interesesPersonales = this.perfil.interesesPersonales;
      data.alumno = this.perfil.alumno;
      data.experienciaLaboral = this.perfil.experienciaLaboral;
      data.experienciaEducativa = this.perfil.experienciaEducativa;
      data.idioma = this.perfil.idioma;
      data.otrosConocimientos = this.perfil.otrosConocimientos;
      data.porcentajeMateriasAprobadas = this.perfil.porcentajeMateriasAprobadas;
      data.cantidadMateriasAprobadas = this.perfil.cantidadMateriasAprobadas;
      data.promedio = this.perfil.promedio;
      data.anioCursada = this.perfil.anioCursada;
      data.carrera = this.perfil.carrera;

      console.log(data);

      this.http.post('https://localhost:44374/Perfil', data).subscribe(x => {
        alert('Perfil Creado!');
      });
    }
  }
}
