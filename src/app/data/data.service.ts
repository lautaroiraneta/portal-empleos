import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Carrera } from '../carrera/carrera.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getEstadosCivil(): Observable<any[]> {
    return of([{
      id: '1',
      nombre: 'Soltero',
    }, {
      id: '2',
      nombre: 'En Pareja'
    }, {
      id: '3',
      nombre: 'Casado'
    }, {
      id: '4',
      nombre: 'Divorciado'
    }, {
      id: '5',
      nombre: 'Viudo'
    }]);
  }

  postAlumno(carrera: Carrera): Observable<any> {
    return this.http.post('https://putsreq.com/FOaQArpd1uZoM1UJruRW', carrera);
    //return of(carrera);
  }
}
