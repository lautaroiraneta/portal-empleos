import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { IdValor } from '../empresa/empresa.component';
import { DataService } from '../data/data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

export class Convenio {
  nombre: string;
  facultad: IdValor[];
  generarUniversidad: boolean;
  duracionMinima: number;
  duracionMaxima: number;
  plazoRenovacion: number;
  cantidadMaxHoras: number;
  inicioVigencia: IMyDateModel;
  inicioVigenciaDT: Date;
  finVigencia: IMyDateModel;
  finVigenciaDT: Date;
  renovacionAutomatica: boolean;
  plazoExtension: number;
  cantMaxPasantes: number;
  etapaId: string;
}

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  convenio: Convenio;

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab' },
    monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' }
    // other options are here...
  };

  facultades: IdValor[];

  dropdownSettingsSingle: IDropdownSettings = {
    singleSelection: true,
    closeDropDownOnSelection: true,
    idField: 'id',
    textField: 'valor',
    enableCheckAll: false,
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  empresa: string;

  constructor(private dataService: DataService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dataService.getFacultades().subscribe(x => {
      this.facultades = x;
    });

    this.http.get('https://localhost:44374/Empresa').subscribe((x: IdValor[]) => {
      this.empresa = x.filter(y => y.id === this.route.snapshot.params['empresa'])[0].valor;
      console.log(this.empresa);
    });

    this.convenio = new Convenio();
  }

  onSubmit(form: NgForm) {
    console.log('form ' + JSON.stringify(form.form.value));
    console.log('convenio: ' + JSON.stringify(this.convenio));

    let data = new Convenio();
    data.cantMaxPasantes = this.convenio.cantMaxPasantes;
    data.cantidadMaxHoras = this.convenio.cantidadMaxHoras;
    data.duracionMaxima = this.convenio.duracionMaxima;
    data.duracionMinima = this.convenio.duracionMinima;
    data.facultad = this.convenio.facultad;
    data.finVigencia = this.convenio.finVigencia;
    data.finVigenciaDT = this.convenio.finVigencia.singleDate.date ?
      new Date(this.convenio.finVigencia.singleDate.date.year, this.convenio.finVigencia.singleDate.date.month - 1, this.convenio.finVigencia.singleDate.date.day) : new Date();
    data.generarUniversidad = this.convenio.generarUniversidad;
    data.inicioVigencia = this.convenio.inicioVigencia;
    data.inicioVigenciaDT = this.convenio.inicioVigencia.singleDate.date ?
      new Date(this.convenio.inicioVigencia.singleDate.date.year, this.convenio.inicioVigencia.singleDate.date.month - 1, this.convenio.inicioVigencia.singleDate.date.day) : new Date();
    data.nombre = this.convenio.nombre;
    data.plazoExtension = this.convenio.plazoExtension;
    data.plazoRenovacion = this.convenio.plazoRenovacion;
    data.renovacionAutomatica = this.convenio.renovacionAutomatica;
    data.etapaId = this.route.snapshot.params['etapa'];

    this.http.post('https://localhost:44374/Convenio', data).subscribe(x => {
      alert('Convenio Creado!');
      this.http.get('https://localhost:44374/Etapa/finalizar-etapa?etapaDefinicionId=' + data.etapaId).subscribe(x => {
        this.router.navigate(['/etapa/' + data.etapaId ]);
      });
    });
  }

  facultadTieneValor(): boolean {
    return this.convenio.facultad !== undefined && this.convenio.facultad !== null && this.convenio.facultad.length > 0;
  }
}
