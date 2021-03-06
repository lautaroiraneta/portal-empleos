import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IdValor } from '../empresa/empresa.component';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';

export class ConvenioView {
  id: string;
  nombreEtapa: string;
  empresa: IdValor;
  fecIni: string;
  estado: string;
  nombre: string;
}

@Component({
  selector: 'app-convenio-list',
  templateUrl: './convenio-list.component.html',
  styleUrls: ['./convenio-list.component.css']
})
export class ConvenioListComponent implements OnInit {
  convenios: ConvenioView[];

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

  constructor(private helperService: HelperService, private http: HttpClient) { }

  ngOnInit() {
    var usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
    this.items = this.convenios;
    this.dropdownSettingsSingle = this.helperService.dropdownSettingsSingle;

    this.http.get('https://localhost:44374/Convenio').subscribe((x: ConvenioView[]) => {
      this.convenios = x;
      if (usuario.empresaId !== undefined && usuario.empresaId !== null && usuario.empresaId !== '') {
        this.convenios = x.filter(y => {
          return y.empresa.id === usuario.empresaId;
        });
      }     
      console.log(this.convenios);
    });
  }

  actualizarItems(item: any) {
    // this.items = this.convenios.filter(x => {
    //   return x.empresa.id === item.id
    // });
    console.log(item);
  }

  actualizarItemsByEstado(item: any) {
    // this.items = this.convenios.filter(x => {
    //   return x.estadoEtapa.id === item.id
    // });
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }
}
