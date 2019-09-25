import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelperService, Email, Telefono } from '../helper.service';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';

export interface Perfil {
  nombres: string;
  apellidos: string;
  emails: Email[];
  telefonos: Telefono[];
  paisResidencia: string;
  provinciaResidencia: string;
  estadoCivil: string;
  paisNacionalidad: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  mostrarPrimeraParte: boolean = true;
  
  paises = [{
    id: 'ARG',
    nombre: 'Argentina'
  }, {
    id: 'BOL',
    nombre: 'Bolivia'
  }, {
    id: 'BRA',
    nombre: 'Brasil'
  }, {
    id: 'CHI',
    nombre: 'Chile'
  }, {
    id: 'COL',
    nombre: 'Colombia'
  }, {
    id: 'ECU',
    nombre: 'Ecuador'
  }, {
    id: 'PAR',
    nombre: 'Paraguay'
  }, {
    id: 'PER',
    nombre: 'Perú'
  }, {
    id: 'URU',
    nombre: 'Uruguay'
  }, {
    id: 'VEN',
    nombre: 'Venezuela'
  }, {
    id: 'OTRO',
    nombre: 'Otro'
  }];

  provincias = [{
    id: 'BUE',
    nombre: 'Buenos Aires'
  }, {
    id: 'CAT',
    nombre: 'Catamarca'
  }, {
    id: 'CHA',
    nombre: 'Chaco'
  }, {
    id: 'CHU',
    nombre: 'Chubut'
  }, {
    id: 'CBA',
    nombre: 'Córdoba'
  }, {
    id: 'COR',
    nombre: 'Corrientes'
  }, {
    id: 'ENR',
    nombre: 'Entre Ríos'
  }, {
    id: 'FOR',
    nombre: 'Formosa'
  }, {
    id: 'JUJ',
    nombre: 'Jujuy'
  }, {
    id: 'LAP',
    nombre: 'La Pampa'
  }, {
    id: 'LAR',
    nombre: 'La Rioja'
  }, {
    id: 'MEN',
    nombre: 'Mendoza'
  }, {
    id: 'MIS',
    nombre: 'Misiones'
  }, {
    id: 'NEU',
    nombre: 'Neuquen'
  }, {
    id: 'RIO',
    nombre: 'Río Negro'
  }, {
    id: 'SAL',
    nombre: 'Salta'
  }, {
    id: 'SAJ',
    nombre: 'San Juan'
  }, {
    id: 'SAL',
    nombre: 'San Luis'
  }, {
    id: 'SAC',
    nombre: 'Santa Cruz'
  }, {
    id: 'SAF',
    nombre: 'Santa Fe'
  }, {
    id: 'SDE',
    nombre: 'Santiago del Estero'
  }, {
    id: 'TDF',
    nombre: 'Tierra del Fuego'
  }, {
    id: 'TUC',
    nombre: 'Tucumán'
  }];

  perfil : Perfil = {
    nombres: 'Nombres',
    apellidos: 'Apellidos',
    emails: [{
      id: '1',
      email: 'email1@gmail.com'
    }, {
      id: '2',
      email: 'email2@gmail.com'
    }],
    telefonos: [{
      id: '1',
      telefono: '1234567'
    }, {
      id: '2',
      telefono: '578786'
    }],
    paisResidencia: 'ARG',
    provinciaResidencia: 'BUE',
    estadoCivil: '1',
    paisNacionalidad: 'ARG',
    tipoDocumento: '1',
    numeroDocumento: '35.941.589',
    fechaNacimiento: '01/07/1991'
  };

  estadosCivil: Observable<any[]>;


  tiposDocumento = [{
    id: '1',
    nombre: 'DNI'
  }]

  constructor(private helperService: HelperService,
    private dataService: DataService) { }

  ngOnInit() {
    this.estadosCivil = this.dataService.getEstadosCivil();
  }

  agregarEmail() {
    this.helperService.agregarEmail(this.perfil.emails);
  }

  eliminarEmail(id: string) {
    this.perfil.emails = this.helperService.eliminarEmail(this.perfil.emails, id);
  }

  agregarTelefono() {
    this.perfil.telefonos.push({ id: (this.perfil.telefonos[this.perfil.telefonos.length - 1].id + 1).toString(), telefono: '994949'});
  }

  eliminarTelefono(id: string) {
    this.perfil.telefonos = this.perfil.telefonos.filter(x => x.id !== id);

    if (this.perfil.telefonos.length === 0) {
      this.perfil.telefonos.push({ id: '1', telefono: '' });
    }
  }
}
