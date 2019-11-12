import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conocimiento-list',
  templateUrl: './conocimiento-list.component.html',
  styleUrls: ['./conocimiento-list.component.css']
})
export class ConocimientoListComponent implements OnInit {
  conocimientos = [
    { id: '1', nombre: 'Java', tipo: 'Conocimiento', ultimaModificacion: '30/10/2018', aparicionesEnPropuestas: 5, aparicionesEnPerfiles: 12 },
    { id: '2', nombre: 'SQL', tipo: 'Conocimiento', ultimaModificacion: '30/10/2018', aparicionesEnPropuestas: 8, aparicionesEnPerfiles: 20 },
    { id: '3', nombre: 'Analista Comercial', tipo: 'Puesto de Trabajo', ultimaModificacion: '25/10/2018', aparicionesEnPropuestas: 2, aparicionesEnPerfiles: 5 }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://localhost:44374/WeatherForecast')
      .subscribe(x => {
        console.log(x);
      });
  }

}
