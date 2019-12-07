import { Component, OnInit } from '@angular/core';
import { IdValor } from '../empresa/empresa.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  id: string;
  administradorUniversidad: IdValor;
  administradorEmpresa: IdValor;
  estado: IdValor;
  tareas: Tarea[];
  empresa: IdValor;
  convenio: IdValor;
  archivo: string;
  nombreEtapa: string;
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
  responsables: any[] = [];
  responsablesFilter: string[] = [];
  estados: any[] = [];
  estadosFilter: string[] = [];
  ordenarPor: string;
  tipo: any;
  razon: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.etapa = new Etapa();
  }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];

    this.obtenerDatos(id);
  }

  obtenerDatos(id: string) {
    this.tipo = this.route.snapshot.params['tipo'];
    if (this.tipo === 'definicion') {
      this.http.get('https://localhost:44374/Etapa/get-data?etapaDefinicionId=' + id).subscribe((x: Etapa) => {
        this.etapa = x;
        this.etapa.id = id;
        this.items = this.etapa.tareas;
        var respAux = this.etapa.tareas.map(item => item.responsable)
          .filter((value, index, self) => self.indexOf(value) === index);

        var estAux = this.etapa.tareas.map(item => item.estado)
          .filter((value, index, self) => self.indexOf(value) === index);

        for (let i = 0; i < respAux.length; ++i) {
          this.responsables.push({ seleccionado: false, valor: respAux[i] });
        }
        for (let i = 0; i < estAux.length; ++i) {
          this.estados.push({ seleccionado: false, valor: estAux[i] });
        }
        console.log(this.etapa);
      });
    } else if (this.tipo === 'seleccion') {
      this.http.get('https://localhost:44374/Etapa/get-data-seleccion-alumno?etapaSeleccionId=' + id).subscribe((x: Etapa) => {
        this.etapa = x;
        this.etapa.id = id;
        this.items = this.etapa.tareas;
        var respAux = this.etapa.tareas.map(item => item.responsable)
          .filter((value, index, self) => self.indexOf(value) === index);

        var estAux = this.etapa.tareas.map(item => item.estado)
          .filter((value, index, self) => self.indexOf(value) === index);

        for (let i = 0; i < respAux.length; ++i) {
          this.responsables.push({ seleccionado: false, valor: respAux[i] });
        }
        for (let i = 0; i < estAux.length; ++i) {
          this.estados.push({ seleccionado: false, valor: estAux[i] });
        }
        console.log(this.etapa);
      });
    }

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
      return (estado.valor !== 'Estado: Desestimado' && this.tipo === 'definicion') ||
        (estado.valor !== 'Estado: Alumno Rechazado' && estado.valor !== 'Estado: Finalizada' && this.tipo === 'seleccion');
    } else {
      return false;
    }
  }

  mostrarBotonIniciar(estado: IdValor): boolean {
    if (estado !== null && estado !== undefined) {
      return estado.valor === 'Estado: Listo para iniciar' || estado.valor === 'Estado: Lista para iniciar';
    } else {
      return false;
    }
  }

  actualizarItems() {
    var items = [];
    if (this.responsablesFilter.length > 0) {
      for (let i = 0; i < this.etapa.tareas.length; ++i) {
        var tarea = this.etapa.tareas[i];
        if (this.responsablesFilter.includes(tarea.responsable)) {
          items.push(tarea);
        }
      }
    } else {
      items = this.etapa.tareas;
    }
    var items2 = [];
    if (this.estadosFilter.length > 0) {
      for (let i = 0; i < items.length; ++i) {
        var tarea = this.etapa.tareas[i];
        if (this.estadosFilter.includes(tarea.estado)) {
          items2.push(tarea);
        }
      }
    } else {
      items2 = items;
    }

    this.items = items2.filter(x => {
      return (
        x.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) && (this.filtroNombre !== '' || this.filtroNombre !== undefined)
      )
    });
  }

  actualizarItemsResp(r: any) {
    if (r.seleccionado) {
      this.responsablesFilter.push(r.valor);
      this.actualizarItems();
    } else {
      this.responsablesFilter = this.responsablesFilter.filter(x => x !== r.valor);
      this.actualizarItems();
    }
  }

  actualizarItemsEst(r: any) {
    if (r.seleccionado) {
      this.estadosFilter.push(r.valor);
      this.actualizarItems();
    } else {
      this.estadosFilter = this.responsablesFilter.filter(x => x !== r.valor);
      this.actualizarItems();
    }
  }

  onOrdenarPor() {
    console.log(this.ordenarPor);
  }

  iniciarDefinicion() {
    this.http.get('https://localhost:44374/Etapa/iniciar-etapa?etapaDefinicionId=' + this.etapa.id).subscribe(x => {
      alert('Etapa iniciada');
      this.obtenerDatos(this.etapa.id);
    });
  }

  iniciarSeleccion() {
    this.http.get('https://localhost:44374/Etapa/iniciar-seleccion?etapaId=' + this.etapa.id).subscribe(x => {
      alert('Etapa iniciada');
      this.obtenerDatos(this.etapa.id);
    });
  }

  desestimarDefinicion() {
    var r = confirm('¿Está seguro que desea desestimar la etapa? Si ha creado un Convenio, las etapas de Selección e Ingreso relacionadas sin finalizar quedarán en infracción.');
    if (r === true) {
      this.http.get('https://localhost:44374/Etapa/desestimar-etapa?etapaDefinicionId=' + this.etapa.id).subscribe(x => {
        alert('Etapa desestimada');
        this.obtenerDatos(this.etapa.id);
      });
    }
  }

  desestimarSeleccion() {
    alert(this.razon);
    let data = new IdValor();
    data.id = this.etapa.id;
    data.valor = this.razon;
    this.http.post('https://localhost:44374/Etapa/desestimar-seleccion', data).subscribe(x => {
      alert('Etapa desestimada');
      this.modalService.dismissAll();
      this.obtenerDatos(this.etapa.id);
    });
  }

  finalizar() {
    var aux = this.etapa.tareas.filter(x => x.estado.includes('No iniciada') || x.estado.includes('Lista para iniciar') || x.estado.includes('En progreso'));
    if (aux.length > 0) {
      var r = confirm('¿Está seguro que desea finalizar la etapa? Existen tareas sin finalizar.');
      if (r === true) {
        if (this.tipo === 'definicion') {
          this.router.navigate(['/convenio/' + this.etapa.id + '/' + this.etapa.empresa.id]);
        } else if (this.tipo === 'seleccion') {
          this.http.get('https://localhost:44374/Etapa/finalizar-seleccion?etapaId=' + this.etapa.id).subscribe(x => {
            alert('Etapa Finalizada!');
            this.obtenerDatos(this.etapa.id);
          });
        }
      }
    } else {
      var r = confirm('¿Está seguro que desea finalizar la etapa?');
      if (r === true) {
        if (this.tipo === 'definicion') {
          this.router.navigate(['/convenio/' + this.etapa.id + '/' + this.etapa.empresa.id]);
        } else if (this.tipo === 'seleccion'){
          this.http.get('https://localhost:44374/Etapa/finalizar-seleccion?etapaId=' + this.etapa.id).subscribe(x => {
            alert('Etapa Finalizada!');
            this.obtenerDatos(this.etapa.id);
          });
        }
      }
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log('modal cerrado');
    });
  }
}
