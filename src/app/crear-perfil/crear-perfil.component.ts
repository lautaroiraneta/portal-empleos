import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelperService, Email, Telefono } from '../helper.service';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export interface Perfil {
  nombres: string;
  apellidos: string;
  emails: Email[];
  telefonos: Telefono[];
  paisResidencia: any;
  provinciaResidencia: any;
  estadoCivil: any;
  paisNacionalidad: any;
  tipoDocumento: any;
  numeroDocumento: string;
  fechaNacimiento: IMyDateModel;
  redesSociales: any;
  fotoPerfil: any;
  objetivoLaboral: any;
  interesesPersonales: any;
  experienciaLaboral: any;
}

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  paso: number = 1;

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };
  
  paises = [
    { id: 'ARG', nombre: 'Argentina' }, 
    { id: 'BOL', nombre: 'Bolivia' }, 
    { id: 'BRA', nombre: 'Brasil' }, 
    { id: 'CHI', nombre: 'Chile' }, 
    { id: 'COL', nombre: 'Colombia' }, 
    { id: 'ECU', nombre: 'Ecuador' }, 
    { id: 'PAR', nombre: 'Paraguay' }, 
    { id: 'PER', nombre: 'Perú' }, 
    { id: 'URU', nombre: 'Uruguay' }, 
    { id: 'VEN', nombre: 'Venezuela' }, 
    { id: 'OTRO', nombre: 'Otro' }
  ];

  provincias = [
    { id: 'BUE', nombre: 'Buenos Aires' }, 
    { id: 'CAT', nombre: 'Catamarca' },
    { id: 'CHA', nombre: 'Chaco' }, 
    { id: 'CHU', nombre: 'Chubut' }, 
    { id: 'CBA', nombre: 'Córdoba' }, 
    { id: 'COR', nombre: 'Corrientes' }, 
    { id: 'ENR', nombre: 'Entre Ríos' }, 
    { id: 'FOR', nombre: 'Formosa' }, 
    { id: 'JUJ', nombre: 'Jujuy' }, 
    { id: 'LAP', nombre: 'La Pampa' }, 
    { id: 'LAR', nombre: 'La Rioja' }, 
    { id: 'MEN', nombre: 'Mendoza' }, 
    { id: 'MIS', nombre: 'Misiones' }, 
    { id: 'NEU', nombre: 'Neuquen' },
    { id: 'RIO', nombre: 'Río Negro' }, 
    { id: 'SAL', nombre: 'Salta' }, 
    { id: 'SAJ', nombre: 'San Juan' }, 
    { id: 'SAL', nombre: 'San Luis' }, 
    { id: 'SAC', nombre: 'Santa Cruz' }, 
    { id: 'SAF', nombre: 'Santa Fe' }, 
    { id: 'SDE', nombre: 'Santiago del Estero' }, 
    { id: 'TDF', nombre: 'Tierra del Fuego' }, 
    { id: 'TUC', nombre: 'Tucumán' }
  ];

  perfil : Perfil = {
    nombres: 'Nombres',
    apellidos: 'Apellidos',
    emails: [
      { id: '1', email: 'email1@gmail.com' }, 
      { id: '2', email: 'email2@gmail.com' }
    ],
    telefonos: [
      { id: '1', telefono: '1234567' }, 
      { id: '2', telefono: '578786' }
    ],
    paisResidencia: [
      { id: 'ARG', nombre: 'Argentina' }
    ],
    provinciaResidencia: [
      { id: 'BUE', nombre: 'Buenos Aires' }
    ],
    estadoCivil: [
      { id: '2', nombre: 'En Pareja' }
    ],
    paisNacionalidad: [{ id: 'ARG', nombre: 'Argentina' }],
    tipoDocumento:  [
      { id: '1', nombre: 'DNI'}
    ],
    numeroDocumento: '35.941.589',
    fechaNacimiento: null,
    fotoPerfil: null,
    redesSociales: {
      twitter: '@__lauta',
      mostrarFeedTwitter: true,
      facebook: 'lautaroiraneta',
      mostrarFeedFacebook: true,
      instagram: 'lautaaa',
      mostrarFeedInstagram: true,
      linkedIn: 'Lautaro Irañeta',
      mostrarFeedLinkedIn: true,
    },
    objetivoLaboral: 'Hacer poco y ganar mucho. AGREGAR RICH TEXT!!!!!!',
    interesesPersonales: 'Spurs, Mets y Raiders papá',
    experienciaLaboral: [{
      id: '1',
      empresa: {
        id: 'google',
        nombre: 'Google'
      },
      puesto: 'Software Engineer',
      fechaDesde: '10/2013',
      fechaHasta: '10/2014'
    }, {
      id: '2',
      empresa: {
        id: 'jpmorgan',
        nombre: 'JP Morgan'
      },
      puesto: 'Senior Software Engineer',
      fechaDesde: '11/2014',
      fechaHasta: '11/2016'
    }, {
      id: '3',
      empresa: {
        id: 'mercadolibre',
        nombre: 'MercadoLibre'
      },
      puesto: 'Technical Leader',
      fechaDesde: '12/2016',
      fechaHasta: 'Actualidad'
    }]
  };

  estadosCivil: Observable<any[]>;

  tiposDocumento = [
    { id: '1', nombre: 'DNI'}
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

  closeResult: string;

  experienciaLaboral = {
    empresa: 'Una Empresa',
    puestoLaboral: [{
      id: '2',
      nombre: 'Analista'
    }],
    fechaDesde: null,
    fechaHasta: null,
    actualmenteTrabajando: true,
    descripcion: 'aasdasdasd',
    conocimientosAdquiridos: 'SQL - .NET - Apache'
  };
  
  puestosLaborales = [{
    id: '1',
    nombre: 'Software Engineer'
  }, {
    id: '2',
    nombre: 'Analista'
  }]

  constructor(
    private helperService: HelperService,
    private dataService: DataService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.estadosCivil = this.dataService.getEstadosCivil();

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}
