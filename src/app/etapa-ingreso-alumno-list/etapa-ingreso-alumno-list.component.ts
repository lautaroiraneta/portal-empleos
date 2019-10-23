import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-etapa-ingreso-alumno-list',
  templateUrl: './etapa-ingreso-alumno-list.component.html',
  styleUrls: ['./etapa-ingreso-alumno-list.component.css']
})
export class EtapaIngresoAlumnoListComponent implements OnInit {
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
    propuesta: {
      id: '1',
      nombre: 'Se busca analista...'
    },
    fechaAceptacion: '01/07/2018',
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
    propuesta: {
      id: '2',
      nombre: 'Buscamos desarrollador...'
    },
    fechaAceptacion: '20/08/2018',
    estadoEtapa: {
      id: 'enp',
      nombre: 'En Progreso'
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
    propuesta: {
      id: '3',
      nombre: 'Se busca licenciado...'
    },
    fechaAceptacion: '27/09/2018',
    estadoEtapa: {
      id: 'des',
      nombre: 'Desestimado'
    }
  }];

  empresas: any;
  items: any;
  dropdownSettingsSingle: IDropdownSettings;
  filtroEmpresa: any;
  filtroEstado: any;
  estados: any;
  filtroNombre: any;
  filtroPropuesta: any;

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
        &&
        (this.filtroPropuesta === '' || x.propuesta.nombre.toLowerCase().includes(this.filtroPropuesta.toLowerCase()))
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
