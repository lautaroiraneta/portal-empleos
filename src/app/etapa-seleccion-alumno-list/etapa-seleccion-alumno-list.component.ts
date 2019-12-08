import { Component, OnInit } from '@angular/core';
import { IdValor } from '../empresa/empresa.component';
import { DataService } from '../data/data.service';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

export class EtapaSeleccionAlumno {
  id: string;
  alumno: string;
  carrera: string;
  empresa: IdValor;
  estadoEtapa: string;
  etapaId: string;
  fechaPostulacion: string;
  propuesta: IdValor;
}

@Component({
  selector: 'app-etapa-seleccion-alumno-list',
  templateUrl: './etapa-seleccion-alumno-list.component.html',
  styleUrls: ['./etapa-seleccion-alumno-list.component.css']
})
export class EtapaSeleccionAlumnoListComponent implements OnInit {
  etapas: EtapaSeleccionAlumno[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    this.dataService.getEtapasSeleccionAlumno().subscribe(x => {
      this.etapas = x;
      if (usuario.empresaId !== undefined && usuario.empresaId !== null && usuario.empresaId !== '') {
        this.etapas = x.filter(y => {
          return y.empresa.id === usuario.empresaId;
        });
      }
      if (usuario.alumnoId !== undefined && usuario.alumnoId !== null && usuario.alumnoId !== '') {
        this.etapas = x.filter(y => {
          return y.alumno.includes(usuario.nombre) && y.alumno.includes(usuario.apellido);
        });
      }
    });
  }

}
