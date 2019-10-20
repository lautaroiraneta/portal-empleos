import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {
  isCollapsedCarrera = true;
  isCollapsedEdadDesdeHasta = true;
  isCollapsedDatosAcademicos = true;
  isCollapsedPuestos = true;
  isCollapsedConocimientos = true;
  filtroNombre: string = '';
  filtroLugar: string = '';

  items: any = null;

  alumnos = [
    {
      nombre: 'Lautaro Irañeta',
      carrera: 'Ingeniería en Informática',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/53392913_10217412438410264_1299546104634802176_n.jpg?_nc_cat=101&_nc_oc=AQnq8WyKzdlSniQnvJ0i5UZzYr5P8cxHNpiR0t7JpGmMgL0nbYTPykGBFP74zzlqjTQ&_nc_ht=scontent.faep7-1.fna&oh=b9120705606ef084094061f63c1b0261&oe=5E126BBC'
    },
    {
      nombre: 'Lucas Vatano',
      carrera: 'Ingeniería en Informática',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4E03AQGdQj8sVm9_eg/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=v4N8uhgcrxwVwGQFaq1fDO_Gjje99vz0nYKBE9PdWSA'
    },
    {
      nombre: 'Juan González',
      carrera: 'Licenciatura en RRHH',
      lugar: 'Buenos Aires, Argentina',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4E03AQHr2Lc_0AtRUw/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=9bgiAp-SA7nRifFdy-NL62W9o-BBLPiVB3JBWUWXbHg'
    },
    {
      nombre: 'Rocío Toledo',
      carrera: 'Licenciatura en Informática',
      lugar: 'Banfield, Buenos Aires',
      fotoPerfil: 'https://media.licdn.com/dms/image/C4D03AQHkdUQ-OU5BCA/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=a3N_N17m5NOS1cPXcyYFAPoVmfkfNhh7yFMJFkNGwjk'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.items = this.alumnos;
  }

  actualizarItems() {
    console.log(this.filtroNombre);
    this.items = this.alumnos.filter(x => {
      return (
        x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
        &&
        (x.lugar.toLowerCase().includes(this.filtroLugar.toLowerCase()) && (this.filtroLugar !== '' || this.filtroLugar !== undefined))
      )
    });

    // this.items = this.conocimientos.filter(x => {
    //   return ((x.tipo === 'c' && this.mostrarConocimientos) || (x.tipo === 'p' && this.mostrarPuestos)) 
    //     &&
    //     ((x.estado === 'v' && this.mostrarValidos) || (x.estado === 'i' && this.mostrarInvalidos) || (x.estado === 'p' && this.mostrarPendientes))
    //     &&
    //     (x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined))
    // });
  }

}
