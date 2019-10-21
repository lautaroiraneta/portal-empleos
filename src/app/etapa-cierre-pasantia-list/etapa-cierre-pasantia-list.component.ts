import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-etapa-cierre-pasantia-list',
  templateUrl: './etapa-cierre-pasantia-list.component.html',
  styleUrls: ['./etapa-cierre-pasantia-list.component.css']
})
export class EtapaCierrePasantiaListComponent implements OnInit {
  etapas = [{
    alumno: {
      id: '1',
      nombre: 'Maximiliano Echeverría Fernández',
      legajo: '1012934'
    },
    empresa: {
      id: '1',
      nombre: 'Google'
    },
    fechaInicioEtapa: '01/11/2018',
    estadoEtapa: {
      id: 'enp',
      nombre: 'En Progreso'
    }
  }, {
    alumno: {
      id: '2',
      nombre: 'Eugenia Rivas',
      legajo: '1035944'
    },
    empresa: {
      id: '2',
      nombre: 'Red Sox'
    },
    fechaInicioEtapa: '01/02/2019',
    estadoEtapa: {
      id: 'lpi',
      nombre: 'Listo para iniciar'
    }
  }, {
    alumno: {
      id: '3',
      nombre: 'Aaron Juez',
      legajo: '100399'
    },
    empresa: {
      id: '3',
      nombre: 'xNova'
    },
    fechaInicioEtapa: '01/07/2019',
    estadoEtapa: {
      id: 'cca',
      nombre: 'Cierre Cancelado'
    }
  }];

  empresas: any;
  items: any;
  dropdownSettingsSingle: IDropdownSettings;
  filtroEmpresa: any;
  filtroEstado: any;
  estados: any;
  filtroNombre: any;

  constructor(private helperService: HelperService) { 
    this.dropdownSettingsSingle = this.helperService.dropdownSettingsSingle;
  }

  ngOnInit() {
    this.items = this.etapas;

    this.empresas = this.etapas.map(x => {
      return x.empresa;
    });

    this.estados = this.etapas.map(x => {
      return x.estadoEtapa;
    });

    this.filtroEstado = null;
    this.filtroEmpresa = null;
    this.filtroNombre = '';
  }

  actualizarItems() {
    console.log(this.filtroNombre);
    this.items = this.etapas.filter(x => {
      return (
        (this.filtroEmpresa === null || x.empresa.id === this.filtroEmpresa.id) 
        && 
        (this.filtroEstado === null || x.estadoEtapa.id === this.filtroEstado.id)
        &&
        (this.filtroNombre === '' || x.alumno.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) || x.alumno.legajo.toLowerCase().includes(this.filtroNombre.toLowerCase()))
      )
    });
  }

  actualizarItemsEmpresa(item: any) {
    this.filtroEmpresa = item;
    this.actualizarItems();
  }

  actualizarItemsEstado(item: any) {
    this.filtroEstado = item;
    this.actualizarItems();
  }
}
