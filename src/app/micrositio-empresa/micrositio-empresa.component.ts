import { Component, OnInit } from '@angular/core';
import { Empresa, IdValor } from '../empresa/empresa.component';
import { Micrositio } from '../micrositio/micrositio.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-micrositio-empresa',
  templateUrl: './micrositio-empresa.component.html',
  styleUrls: ['./micrositio-empresa.component.css']
})
export class MicrositioEmpresaComponent implements OnInit {
  empresa: Empresa;
  micrositio: Micrositio;
  nombreEmpresa: string;

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    this.http.get('https://localhost:44374/Micrositio?empresaId=' + usuario.empresaId).subscribe((x: Micrositio) =>{
      this.micrositio = x;
    });

    this.dataService.getEmpresas().subscribe((x: IdValor[]) => {
      this.nombreEmpresa = x.filter(y => y.id === usuario.empresaId)[0].valor;
    });

  }

}
