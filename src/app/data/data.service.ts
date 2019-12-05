import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Carrera } from '../carrera/carrera.component';
import { HttpClient } from '@angular/common/http';
import { IdValor, Empresa } from '../empresa/empresa.component';
import { Puesto, Conocimiento, Perfil } from '../crear-perfil/crear-perfil.component';
import { Usuario } from '../aprobacion-usuario/aprobacion-usuario.component';
import { EtapaSeleccionAlumno } from '../etapa-seleccion-alumno-list/etapa-seleccion-alumno-list.component';
import { PerfilView } from '../alumno-list/alumno-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postAlumno(carrera: Carrera): Observable<any> {
    return this.http.post('https://localhost:44374/WeatherForecast', carrera);
  }

  getPaises(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Pais');
  }

  getProvincias(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Provincia');
  }

  getPuestos(): Subscribable<Puesto[]> {
    return this.http.get<Puesto[]>('https://localhost:44374/Puesto');
  }

  getConocimientos(): Subscribable<Conocimiento[]> {
    return this.http.get<Conocimiento[]>('https://localhost:44374/Conocimiento');
  }

  getIdiomas(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Idioma');
  }

  getCarreras(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Carrera');
  }

  getPerfiles(): Subscribable<PerfilView[]> {
    return this.http.get<PerfilView[]>('https://localhost:44374/Perfil')
  }

  getEmpresas(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Empresa')
  }

  getZonas(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Zona');
  }

  getCiudades(provincia: string, zona: string): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Ciudad?prov=' + provincia + '&zona=' + zona);
  }

  getLocalidades(ciudad: string): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Localidad?ciudad=' + ciudad);
  }

  getFacultades(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Facultad');
  }

  getDocentesGuia(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/DocenteGuia');
  }

  getTutores(): Subscribable<IdValor[]> {
    return this.http.get<IdValor[]>('https://localhost:44374/Tutor');
  }

  getUsuarios(): Subscribable<Usuario[]> {
    return this.http.get<Usuario[]>('https://localhost:44374/Usuario');
  }

  getEtapasSeleccionAlumno(): Subscribable<EtapaSeleccionAlumno[]> {
    return this.http.get<EtapaSeleccionAlumno[]>('https://localhost:44374/EtapaSeleccionAlumno');
  }
}
