import { Component, OnInit } from '@angular/core';
import { Empresa, IdValor } from '../empresa/empresa.component';
import { Micrositio } from '../micrositio/micrositio.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-micrositio-empresa',
  templateUrl: './micrositio-empresa.component.html',
  styleUrls: ['./micrositio-empresa.component.css']
})
export class MicrositioEmpresaComponent implements OnInit {
  empresa: Empresa;
  micrositio: Micrositio;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id === 'new') {
      var usuario = JSON.parse(localStorage.getItem('usuario'));
      this.http.get('https://localhost:44374/Micrositio?empresaId=' + usuario.empresaId).subscribe((x: Micrositio) =>{
        this.micrositio = x;
      });
      this.http.get('https://localhost:44374/Empresa/get-by-id?empresaId=' + usuario.empresaId).subscribe((x: Empresa) => {
        this.empresa = x;
      });
    } else {
      this.http.get('https://localhost:44374/Micrositio?empresaId=' + id).subscribe((x: Micrositio) =>{
        this.micrositio = x;
      });
      this.http.get('https://localhost:44374/Empresa/get-by-id?empresaId=' + id).subscribe((x: Empresa) => {
        this.empresa = x;
      });
    }
  }

}
