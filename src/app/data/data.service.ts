import { Injectable } from '@angular/core';
import { of, Observable, Subscribable } from 'rxjs';
import { Carrera } from '../carrera/carrera.component';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postAlumno(carrera: Carrera): Observable<any> {
    return this.http.post('https://localhost:44374/WeatherForecast', carrera);
  }

  getPaises(): Subscribable<IdValor[]>{
    return this.http.get<IdValor[]>('https://localhost:44374/Pais');
  }

  getProvincias(): Subscribable<IdValor[]>{
    return this.http.get<IdValor[]>('https://localhost:44374/Provincia');
  }
}
