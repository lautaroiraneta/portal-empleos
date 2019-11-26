import { Component, OnInit } from '@angular/core';
import { Perfil } from '../crear-perfil/crear-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   perfil : Perfil;
  //  = {
  //   nombre: 'Nombres',
  //   apellido: 'Apellidos',
  //   emails: [
  //     { id: '1', valor: 'email1@gmail.com' }, 
  //     { id: '2', valor: 'email2@gmail.com' }
  //   ],
  //   telefonos: [
  //     { id: '1', valor: '1234567' }, 
  //     { id: '2', valor: '578786' }
  //   ],
  //   paisResidencia: [
  //     { id: 'ARG', valor: 'Argentina' }
  //   ],
  //   provinciaResidencia: [
  //     { id: 'BUE', valor: 'Buenos Aires' }
  //   ],
  //   estadoCivil: [ { id: '2', valor: 'En Pareja' } ],
  //   fechaNacimientoDT: null,
  //   paisNacionalidad: [{ id: 'ARG', valor: 'Argentina' }],
  //   tipoDocumento: 'DNI',
  //   documento: '35.941.589',
  //   fechaNacimiento: null,
  //   fotoPerfil: null,
  //   redesSociales: {
  //     twitter: '@__lauta',
  //     mostrarFeedTwitter: true,
  //     facebook: 'lautaroiraneta',
  //     mostrarFeedFacebook: true,
  //     instagram: 'lautaaa',
  //     mostrarFeedInstagram: true,
  //     linkedIn: 'Lautaro Irañeta',
  //     mostrarFeedLinkedIn: true,
  //   },
  //   objetivoLaboral: 'Hacer poco y ganar mucho. AGREGAR RICH TEXT!!!!!!',
  //   interesesPersonales: 'Spurs, Mets y Raiders papá',
  //   experienciaLaboral: [{
  //     id: '1',
  //     empresa: {
  //       id: 'google',
  //       nombre: 'Google'
  //     },
  //     puesto: 'Software Engineer',
  //     fechaDesde: '10/2013',
  //     fechaHasta: '10/2014',
  //     actual: false,
  //     comentarios: 'Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comos Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios '
  //   }, {
  //     id: '2',
  //     empresa: {
  //       id: 'jpmorgan',
  //       nombre: 'JP Morgan'
  //     },
  //     puesto: 'Senior Software Engineer',
  //     fechaDesde: '11/2014',
  //     fechaHasta: '11/2016',
  //     actual: false,
  //     comentarios: 'Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios Comentarios rios Comentarios '
  //   }, {
  //     id: '3',
  //     empresa: {
  //       id: 'mercadolibre',
  //       nombre: 'MercadoLibre'
  //     },
  //     puesto: 'Technical Leader',
  //     fechaDesde: '12/2016',
  //     fechaHasta: 'Actualidad',
  //     actual: true,
  //     comentarios: 'C o m e en nt ta a r i o s'
  //   }],
  //   experienciaEducativa: [{
  //     id: '1',
  //     titulo: 'Ingeniería en Informática',
  //     institucion: 'UADE',
  //     tipo: 'Universitario',
  //     estado: 'En Curso',
  //     fechaInicio: '03/2010',
  //     fechaFin: 'Presente'
  //   }, {
  //     id: '2',
  //     institucion: 'EET N°7 "José Hernández"',
  //     titulo: 'Bachiller en Bienes y Servicios',
  //     tipo: 'Secundario',
  //     estado: 'Completo',
  //     fechaInicio: '03/2006',
  //     fechaFin: '12/2009'
  //   }],
  //   idiomas: [{
  //     idioma: 'Inglés',
  //     nivelOral: {
  //       id: 'int',
  //       nombre: 'Intermedio'
  //     },
  //     nivelEscrito: {
  //       id: 'bas',
  //       nombre: 'Básico'
  //     }
  //   }]
  //   // descripcion: 'Hola mi nombre es Lautaro Irañeta y soy desarrollador que vive en Buenos Aires. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.'
  // };

  constructor() { }

  ngOnInit() {
  }

  obtenerEmpleoActual() {
    // return this.perfil.experienciaLaboral.filter(x => x === true)[0];
  }
}
