import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

export class PerfilView {
  id: string;
  nombre: string;
  ubicacion: string;
  carrera: string;
}

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

  alumnos: PerfilView[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPerfiles().subscribe(x => {
      this.alumnos = x;
    });

    this.items = this.alumnos;
  }

  actualizarItems() {
    // console.log(this.filtroNombre);
    // this.items = this.alumnos.filter(x => {
    //   return (
    //     x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
    //     &&
    //     (x.lugar.toLowerCase().includes(this.filtroLugar.toLowerCase()) && (this.filtroLugar !== '' || this.filtroLugar !== undefined))
    //   )
    // });

    // this.items = this.conocimientos.filter(x => {
    //   return ((x.tipo === 'c' && this.mostrarConocimientos) || (x.tipo === 'p' && this.mostrarPuestos)) 
    //     &&
    //     ((x.estado === 'v' && this.mostrarValidos) || (x.estado === 'i' && this.mostrarInvalidos) || (x.estado === 'p' && this.mostrarPendientes))
    //     &&
    //     (x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined))
    // });
  }

}
