import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HelperService } from '../helper.service';
import { IdValor } from '../empresa/empresa.component';
import { DataService } from '../data/data.service';
import { DatePipe } from '@angular/common';

export class PropuestaView {
  id: string;
  titulo: string;
  empresa: IdValor;
  fechaPosteo: Date;
  diasDif: number;
  provincia: string;
  zona: string;
  ciudad: string;
  localidad: string;
  tipoEmpleo: string;
  turnoEmpleo: string;
  carreras: IdValor[];
}

@Component({
  selector: 'app-propuesta-list',
  templateUrl: './propuesta-list.component.html',
  styleUrls: ['./propuesta-list.component.css']
})
export class PropuestaListComponent implements OnInit {
  propuestas: PropuestaView[];

  items: PropuestaView[];
  filtroTitulo: string = '';
  filtroUbicacion: string = '';
  isCollapsedCarrera: boolean = true;
  isCollapsedEmpresa: boolean = true;
  isCollapsedFechaPosteo: boolean = true;
  isCollapsedTipoTrabajo: boolean = true;
  isCollapsedTurno: boolean = true;
  isCollapsedPuesto: boolean = true;
  isCollapsedCoincidencia: boolean = true;
  carreras: IdValor[] = [];
  carrerasFiltro: IdValor[] = [];
  dropdownSettings: IDropdownSettings;
  empresasFiltro: any = [];
  empresasFiltroSeleccionados: any = [];
  filtroFecha: number;
  carrerasFiltroId: string[];

  constructor(private helperService: HelperService, private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.items = this.propuestas;
    this.dropdownSettings = this.helperService.dropdownSettings;
    this.dropdownSettings.itemsShowLimit = 0;
    this.dropdownSettings.textField = 'valor';

    this.dataService.getPropuestas().subscribe(x => {
      this.propuestas = x;
      this.items = this.propuestas;

      var empAux = this.propuestas.map(item => item.empresa.valor)
        .filter((value, index, self) => self.indexOf(value) === index);

      for (let i = 0; i < empAux.length; ++i) {
        this.empresasFiltro.push({ seleccionado: false, valor: empAux[i] });
      }
    });
    
    this.dataService.getCarreras().subscribe(x => {
      this.carreras = x;
    })
  }

  actualizarItems() {
    var items = this.propuestas.filter(x => {
      return (
        (this.filtroTitulo !== '' || this.filtroTitulo !== undefined) && x.titulo.toLowerCase().includes(this.filtroTitulo.toLowerCase())
      )
    });

    if (this.filtroUbicacion !== '' || this.filtroUbicacion !== undefined) {
      items = items.filter(x => {
        return (
          x.ciudad.toLowerCase().includes(this.filtroUbicacion.toLowerCase()) || x.localidad.toLowerCase().includes(this.filtroUbicacion.toLowerCase()) || x.provincia.toLowerCase().includes(this.filtroUbicacion.toLowerCase())
        )
      });
    }    

    if (this.empresasFiltroSeleccionados.length > 0) {
      items = items.filter(x => {
        return this.empresasFiltroSeleccionados.includes(x.empresa.valor);
      });
    }

    if (this.filtroFecha > 0) {
      items = items.filter(x => {
        return x.diasDif <= this.filtroFecha
      });
    }

    if (this.carrerasFiltroId.length > 0) {
      items = items.filter(x => {
        return x.carreras !== null && x.carreras.filter(y => this.carrerasFiltroId.includes(y.id)).length > 0;
      });
    }

    this.items = items;
  }

  getUbicacion(p: PropuestaView): string {
    var ubi: string[] = [];
    if (p.localidad !== undefined && p.localidad !== null && p.localidad !== '') {
      ubi.push(p.localidad);
    }
    if (p.ciudad !== undefined && p.ciudad !== null && p.ciudad !== '') {
      ubi.push(p.ciudad);
    }
    if (p.zona !== undefined && p.zona !== null && p.zona !== '') {
      ubi.push(p.zona);
    }
    if (p.provincia !== undefined && p.provincia !== null && p.provincia !== '') {
      ubi.push(p.provincia);
    }
    if (ubi.length > 0) {
      return ubi.join(', ');   
    } else {
      return null;
    }
  }

  getFecha(d: Date): string {
    return this.datePipe.transform(d, 'dd/MM/yyyy');
  }

  actualizarItemsEmp(e: any) {
    if (e.seleccionado) {
      this.empresasFiltroSeleccionados.push(e.valor);
      this.actualizarItems();
    } else {
      this.empresasFiltroSeleccionados = this.empresasFiltroSeleccionados.filter(x => x !== e.valor);
      this.actualizarItems();
    }
  }

  obtenerNumeroTipoTrabajo(tipo: string): number {
    if (this.propuestas !== null && this.propuestas !== undefined) {
      return this.propuestas.filter(x => x.tipoEmpleo === tipo).length;
    } else {
      return 0;
    }
  }
  
  actualizarItemsCarrera() {
    this.carrerasFiltroId = this.carrerasFiltro.map(x => x.id);
    this.actualizarItems();
  }
}
