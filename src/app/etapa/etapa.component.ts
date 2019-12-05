import { Component, OnInit } from '@angular/core';
import { IdValor } from '../empresa/empresa.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class Tarea {
  id: string;
  nombre: string;
  responsable: string;
  estado: string;
  fechaFin: string;
  diaModif: string;
  predecesoras: string;
  alta: string;
  diasModifInt: number;
}

export class Etapa {
  administradorUniversidad: IdValor;
  administradorEmpresa: IdValor;
  estado: IdValor;
  tareas: Tarea[];
}

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {
  etapa: Etapa;
  isCollapsedResponsable: boolean = true;
  isCollapsedEstado: boolean = true;
  filtroNombre: string = '';
  items: Tarea[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.etapa = new Etapa();
  }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];

    this.http.get('https://localhost:44374/Etapa/get-data?etapaDefinicionId=' + id ).subscribe((x: Etapa) => {
      this.etapa = x;
      this.items = this.etapa.tareas;
      console.log(this.etapa);
    });
  }

  mostrarBotonFinalizar(estado: IdValor): boolean {
    if (estado !== null && estado !== undefined) {
      return estado.valor === 'Estado: En progreso';
    } else {
      return false;
    }    
  }

  mostrarBotonDesestimar(estado: IdValor): boolean {
    if (estado !== null && estado !== undefined) {
      return estado.valor !== 'Estado: Desestimado';
    } else {
      return false;
    }    
  }

  mostrarBotonIniciar(estado: IdValor): boolean {
    if (estado !== null && estado !== undefined) {
      return estado.valor === 'Estado: Listo para iniciar';
    } else {
      return false;
    }    
  }

  actualizarItems() {
    this.items = this.etapa.tareas.filter(x => {
      return (
        x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
      )
    });
  }
}
