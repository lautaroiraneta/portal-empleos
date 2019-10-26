import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuesta-list',
  templateUrl: './propuesta-list.component.html',
  styleUrls: ['./propuesta-list.component.css']
})
export class PropuestaListComponent implements OnInit {
  propuestas = [{
    nombre: 'Web Designer / Developer',
    empresa: {
      id: 'google',
      nombre: 'Google'
    },
    imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/17155403_1271946119565446_4572866393621171497_n.png?_nc_cat=1&_nc_oc=AQmvHiT9fcBpoilHAY0i4kz_bcNtzEVfK5CFoYvwZuK-iwP-1AAK5t7l3K1QAgYg-fg&_nc_ht=scontent.faep9-2.fna&oh=6e718eacfc67ac110879aaedb0fc281d&oe=5DD6E116',
    ubicacion: 'Palermo, Buenos Aires',
    porcentajeCoincidencia: 95,
    tipoTrabajo: {
      id: 'ft',
      nombre: 'Full-Time'
    },
    fechaPublicacion: 'hace 1 mes',
    carreras: [{
      id: '1',
      nombre: 'Ingeniería en Informática'
    }, {
      id: '2',
      nombre: 'Licenciatura en Informática'
    }]
  }, {
    nombre: 'C Developer (Senior) C .Net',
    empresa: {
      id: 'thomsonreuters',
      nombre: 'Thomson Reuters'
    },
    imagen: 'https://media.licdn.com/dms/image/C4E0BAQH1yjTtvby_-A/company-logo_400_400/0?e=1574294400&v=beta&t=o5UnEWfqlM1NyRGDcwnjH0UgvRB11OyEUphahttaBsk',
    ubicacion: 'Microcentro, Buenos Aires',
    porcentajeCoincidencia: 90,
    tipoTrabajo: {
      id: 'pt',
      nombre: 'Part-Time'
    },
    fechaPublicacion: 'hace 13 días',
    carreras: [{
      id: '1',
      nombre: 'Ingeniería en Informática'
    }]
  }, {
    nombre: 'Regional Sales Manager South',
    empresa: {
      id: 'ypf',
      nombre: 'YPF'
    },
    imagen: 'https://media.licdn.com/dms/image/C4E0BAQGhSg_HuQHxHw/company-logo_400_400/0?e=1574294400&v=beta&t=jKk8TQAKN1SR_fi26oGyTvb-UsCU0EDIt0CxW1SrWK0',
    ubicacion: 'Balcarce, Buenos Aires',
    porcentajeCoincidencia: 58,
    tipoTrabajo: {
      id: 'ft',
      nombre: 'Full-Time'
    },
    fechaPublicacion: 'hace 5 días',
    carreras: [{
      id: '6',
      nombre: 'Licenciado en Economía'
    }, {
      id: '7',
      nombre: 'Analista Económico'
    }]
  }];

  items: any;
  filtroTitulo: string = '';
  isCollapsedCarrera: boolean = true;
  carreras: any = [];
  carrerasFiltro: any = [];

  constructor() { }

  ngOnInit() {
    this.items = this.propuestas;
    this.obtenerCarreras();
  }

  actualizarItems() {
    this.items = this.propuestas.filter(x => {
      return (
        ((this.filtroTitulo !== '' || this.filtroTitulo !== undefined) && x.nombre.toLowerCase().includes(this.filtroTitulo.toLowerCase()))
        &&
        (this.carrerasFiltro.length > 0 && x.carreras.some(this.carrerasFiltro))
      )
    });
  }

  obtenerCarreras() {
    let carrerasAux = [];

    this.propuestas.forEach(x => {
      x.carreras.forEach(y => {
        carrerasAux.push(y);
      });
    });

    this.carreras = carrerasAux.reduce((unique, o) => {
      if (!unique.some(obj => obj.id === o.id && obj.nombre === o.nombre)) {
        unique.push(o);
      }
      return unique;
    }, []);

    console.log(this.carreras);
  }

  actualizarFiltroCarreras(carrera: any) {
    var index = this.carrerasFiltro.findIndex(x => x.id === carrera.id);
    if (index < 0) {
      this.carrerasFiltro.push(carrera);
    } else {
      this.carrerasFiltro = this.carrerasFiltro.filter(x => x.id !== carrera.id);
    }

    this.items = this.propuestas.filter(x => {
      return x.carreras.filter(x => this.carrerasFiltro.includes(x)).length > 0 && this.carrerasFiltro.length > 0
    })

    console.log(this.carrerasFiltro);
  }
}
