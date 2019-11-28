import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Carrera } from '../carrera/carrera.component';
import { HttpClient } from '@angular/common/http';
import { IdValor } from '../empresa/empresa.component';
import { Puesto, Conocimiento } from '../crear-perfil/crear-perfil.component';

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

  getPuestos(): Subscribable<Puesto[]>{
    return this.http.get<Puesto[]>('https://localhost:44374/Puesto');
  }

  getConocimientos(): Subscribable<Conocimiento[]>{
    return this.http.get<Conocimiento[]>('https://localhost:44374/Conocimiento');
  }

  getIdiomas(): Subscribable<IdValor[]>{
    return this.http.get<IdValor[]>('https://localhost:44374/Idioma');
  }

  getCarreras(): Subscribable<IdValor[]>{
    return this.http.get<IdValor[]>('https://localhost:44374/Carrera');
  }
}
