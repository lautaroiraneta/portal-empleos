import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta-view',
  templateUrl: './propuesta-view.component.html',
  styleUrls: ['./propuesta-view.component.css']
})
export class PropuestaViewComponent implements OnInit {
  propuesta = {
    empresa: 'Google',
    ubicacion: 'Palermo, Buenos Aires',
    tipo: 'Full-Time',
    fechaCreado: 'Julio 29, 2019',
    descripcion: 'Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien',
    requisitos: [
      'Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)',
      'Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)',
      'Cross-browser and platform testing as standard practice',
      'Experience using Invision a plus',
      'Experience in video production a plus or, at a minimum, a willingness to learn'
    ],
    educacion: [
      'Advanced degree or equivalent experience in graphic and web design',
      '3 or more years of professional design experience',
      'Direct response email experience',
      'Ecommerce website design experience',
      'Familiarity with mobile and web apps preferred'
    ],
    area: 'Desarrollo',
    carreras: ['Ingeniería en Informática', 'Licenciatura en Informática'],
    sueldo: '$60.000 - $70.000',
    beneficios: ['Home Office', 'Descuento en Gimnasio', 'Snacks en la Oficina'],
    edadMinima: 18,
    edadMaxima: 25,
    cantMateriasAprobadas: 30
  };

  constructor() { }

  ngOnInit() {
  }

}
