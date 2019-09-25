import { Component, OnInit } from '@angular/core';
import { HelperService, Email, Telefono } from '../helper.service';

export interface Empresa {
  nombre: string,
  paginaWeb: string,
  cuit: string,
  domicilio: string,
  emails: Email[],
  telefonos: Telefono[],
  contacto: Contacto
}

export interface Contacto {
  nombre: string,
  apellido: string,
  telefono: string,
  email: string,
  cargo: string,
  nombreUsuario: string
}


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresa: Empresa = {
    nombre: 'Nombre',
    paginaWeb: 'www.asd.com.ar',
    cuit: '20-35941589-4',
    domicilio: 'Las Flores 1600 Torre 26 9°C, Wilde, Buenos Aires',
    emails: [{
      id: '1',
      email: 'lautaroiraneta@gmail.com'
    }],
    telefonos: [{
      id: '1',
      telefono: '123123'
    }],
    contacto: {
      nombre: 'Lucas',
      apellido: 'Vatano',
      telefono: '4124124',
      email: 'kvatano@gmail.com',
      cargo: 'Project Leader',
      nombreUsuario: 'lvatano'
    }
  }

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }

  agregarEmail() {
    this.helperService.agregarEmail(this.empresa.emails);
  }

  agregarTelefono() {
    this.helperService.agregarTelefono(this.empresa.telefonos);
  }

  eliminarEmail(id: string) {
    this.empresa.emails = this.helperService.eliminarEmail(this.empresa.emails, id);
  }

  eliminarTelefono(id: string) {
    this.empresa.telefonos = this.helperService.eliminarTelefono(this.empresa.telefonos, id);
  }
}
