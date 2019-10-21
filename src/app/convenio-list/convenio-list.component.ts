import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-convenio-list',
  templateUrl: './convenio-list.component.html',
  styleUrls: ['./convenio-list.component.css']
})
export class ConvenioListComponent implements OnInit {
  convenios = [{
    fecha: '27/10/2018',
    empresa: {
      id: '1',
      nombre: 'Google'
    },
    estadoEtapa: {
      id: 'c',
      nombre: 'Completa'
    }
  }, {
    fecha: '27/10/2018',
    empresa: {
      id: '2',
      nombre: 'Apple'
    },
    estadoEtapa: {
      id: 'e',
      nombre: 'En Curso'
    }
  }, {
    fecha: '27/10/2018',
    empresa: {
      id: '3',
      nombre: 'MLB'
    },
    estadoEtapa: {
      id: 'e',
      nombre: 'En Curso'
    }
  }, {
    fecha: '27/10/2018',
    empresa: {
      id: '4',
      nombre: 'NBA'
    },
    estadoEtapa: {
      id: 'c',
      nombre: 'Completa'
    }
  }, {
    fecha: '27/10/2018',
    empresa: {
      id: '4',
      nombre: 'Duff'
    },
    estadoEtapa: {
      id: 'c',
      nombre: 'Completa'
    }
  }];

  items: any;
  empresas: any;
  estados: any = [
    {
      id: 'c',
      nombre: 'Completa'
    },
    {
      id: 'e',
      nombre: 'En Curso'
    }
  ];
  dropdownSettingsSingle: IDropdownSettings;
  filtroEmpresa: any;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.items = this.convenios;
    this.dropdownSettingsSingle = this.helperService.dropdownSettingsSingle;

    this.empresas = this.convenios.map(x => {
      return x.empresa;
    });
  }

  actualizarItems(item: any) {
    this.items = this.convenios.filter(x => {
      return x.empresa.id === item.id
    });
    console.log(item);
  }

  actualizarItemsByEstado(item: any) {
    this.items = this.convenios.filter(x => {
      return x.estadoEtapa.id === item.id
    });
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }
}
