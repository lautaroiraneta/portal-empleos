import { Component, OnInit } from '@angular/core';
import { IdValor } from '../empresa/empresa.component';
import { DataService } from '../data/data.service';

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
    this.dataService.getEtapasSeleccionAlumno().subscribe(x => {
      this.etapas = x;
    });
  }

}
