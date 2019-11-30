import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { IdValor } from '../empresa/empresa.component';
import { HttpClient } from '@angular/common/http';

export class EtapaDefinicionConvenio {
  nombre: string;
  empresa: IdValor[];
}

@Component({
  selector: 'app-etapa-definicion-convenio',
  templateUrl: './etapa-definicion-convenio.component.html',
  styleUrls: ['./etapa-definicion-convenio.component.css']
})
export class EtapaDefinicionConvenioComponent implements OnInit {
  etapa: EtapaDefinicionConvenio;

  empresas: IdValor[] = [];

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.dataService.getEmpresas().subscribe(x => {
      this.empresas = x;
    });

    this.etapa = new EtapaDefinicionConvenio();
  }

  onSubmit(form: NgForm) {
    let data = new EtapaDefinicionConvenio();
    data.empresa = this.etapa.empresa;
    data.nombre = this.etapa.nombre;

    this.http.post('https://localhost:44374/EtapaDefinicionConvenio', data).subscribe(x => {
      alert('Etapa Creada!');
    });
  }
}
