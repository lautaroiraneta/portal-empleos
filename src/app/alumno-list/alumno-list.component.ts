import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno/alumno-service/alumno.service';

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

  alumnos: any;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.getAlumnos();
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
