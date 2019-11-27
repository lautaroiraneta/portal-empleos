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
  nombre: string;
  apellido: string;
  emails: IdValor[] = [];
  telefonos: IdValor[] = [];
  paisResidencia: IdValor[];
  provinciaResidencia: IdValor[];
  estadoCivil: IdValor[];
  paisNacionalidad: IdValor[];
  tipoDocumento: string;
  documento: string;
  fechaNacimiento: IMyDateModel;
  fechaNacimientoDT: Date;
  redesSociales: any = new RedesSociales();
  fotoPerfil: any;
  objetivoLaboral: string;
  interesesPersonales: string;
  experienciaLaboral: ExperienciaLaboral[];
  experienciaEducativa: any;
  idiomas: any;
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
}

export class ExperienciaLaboral {
  empresa: string;
  puesto: Puesto[];
  fechaDesde: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaDesdeDT: Date;
  fechaHasta: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() } };;
  fechaHastaDT: Date;
  actualmenteTrabajando: boolean;
  descripcion: string;
  conocimientos: Conocimiento[];
}

export class RedesSociales {
  twitter: string;
  mostrarFeedTwitter: boolean;
  facebook: string;
  mostrarFeedFacebook: boolean;
  instagram: string;
  mostrarFeedInstagram: boolean;
  linkedIn: string;
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
  provincias: IdValor[];
  puestosLaborales: Puesto[];
  conocimientos: Conocimiento[];

  perfil: Perfil;

  idiomas = [
    { id: 'chi', nombre: 'Chino' },
    { id: 'esp', nombre: 'Español' }, 
    { id: 'fra', nombre: 'Francés' },   
    { id: 'ing', nombre: 'Inglés' },
    { id: 'jap', nombre: 'Japonés' },
    { id: 'por', nombre: 'Portugués' }
  ];

  niveles = [
    { id: 'bas', nombre: 'Básico' },
    { id: 'int', nombre: 'Intermedio' },
    { id: 'ava', nombre: 'Avanzado' }
  ]

  idioma = {
    idioma: [
      { id: 'ing', nombre: 'Inglés' }
    ],
    nivelOral: [
      { id: 'int', nombre: 'Intermedio' }
    ],
    nivelEscrito: [
      { id: 'bas', nombre: 'Básico' }
    ],
    comentarios: 'comentarios'
  }

  tiposDocumento = [
    { id: '1', nombre: 'DNI'}
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
  
  experienciasEducativasTipos = [{
    id: 'primario',
    nombre: 'Primario'
  }, {
    id: 'sec',
    nombre: 'Secundario'
  }, {
    id: 'ter',
    nombre: 'Terciario'
  }, {
    id: 'uni',
    nombre: 'Universitario'
  }];

  estados = [{
    id: 'com',
    nombre: 'Completo'
  }, {
    id: 'enc',
    nombre: 'En Curso'
  }];

  experienciaEducativa = {
    institucion: 'Institución 1',
    titulo: 'Titulo',
    tipo: [{
      id: 'primario',
      nombre: 'Primario'
    }],
    estado: [{
      id: 'enc',
      nombre: 'En Curso'
    }],
    fechaDesde: null,
    fechaHasta: null,
    alPresente: true,
    comentarios: '123 un pasito para adelante '
  };

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
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id !== 'new') {
      // this.alumno = this.alumnoService.getById(id);
    } else {
      this.perfil = new Perfil();
      this.perfil.emails.push({ id: 'new', valor: '' });
      this.perfil.telefonos.push({ id: 'new', valor: '' });
      this.perfil.experienciaLaboral = [];
    }

    this.dataService.getPaises().subscribe(x => {
      this.paises = x;
    });

    this.dataService.getProvincias().subscribe(x => {
      this.provincias = x;
    });

    this.perfil.fechaNacimiento = { isRange: false, singleDate: { jsDate: new Date() } };
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

  saveExperienciaLaboral() {
    this.experienciaLaboral.fechaDesdeDT = this.experienciaLaboral.fechaDesde.singleDate.date ?
      new Date(this.experienciaLaboral.fechaDesde.singleDate.date.year, this.experienciaLaboral.fechaDesde.singleDate.date.month - 1, this.experienciaLaboral.fechaDesde.singleDate.date.day) : new Date();
      this.experienciaLaboral.fechaHastaDT = this.experienciaLaboral.fechaHasta.singleDate.date ?
      new Date(this.experienciaLaboral.fechaHasta.singleDate.date.year, this.experienciaLaboral.fechaHasta.singleDate.date.month - 1, this.experienciaLaboral.fechaDesde.singleDate.date.day) : new Date();
    this.perfil.experienciaLaboral.push(this.experienciaLaboral);
    console.log(this.perfil);
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
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
      data.experienciaLaboral = this.perfil.experienciaLaboral;

      this.http.post('https://localhost:44374/Perfil', data).subscribe(x => {
        alert('Perfil Creado!');
      });
    }
  }
}
