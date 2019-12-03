import { Component, OnInit } from '@angular/core';
import { Perfil, ExperienciaLaboral } from '../crear-perfil/crear-perfil.component';
import { HttpClient } from '@angular/common/http';
import { IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   perfil : Perfil;

  constructor(private http: HttpClient) {
    this.perfil = new Perfil();
   }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario);
    if (usuario !== undefined && usuario !== null && usuario !== '') {
      this.http.get<Perfil>('https://localhost:44374/Perfil/perfil/get-by-alumno-id?alumnoId=' + usuario).subscribe(x => {
        this.perfil = x;
        this.perfil.fechaNacimiento = { isRange: false, singleDate: { jsDate: new Date(this.perfil.fechaNacimientoDT) } };
        if (this.perfil.emails === null) {
          this.perfil.emails = [];
          this.perfil.emails.push({ id: 'new', valor: '' });
        }
        if (this.perfil.telefonos === null) {
          this.perfil.telefonos = [];
          this.perfil.telefonos.push({ id: 'new', valor: '' });
        }
      });
    }
  }

  obtenerPuestoActual() {
    if (this.perfil.experienciaLaboral !== undefined && this.perfil.experienciaLaboral !== null && this.perfil.experienciaLaboral.length > 0) {
      var exp = this.perfil.experienciaLaboral.filter(x => x.actualmenteTrabajando);
      if (exp.length > 0) {
        if (exp[0].puestoLaboral !== undefined && exp[0].puestoLaboral !== null && exp[0].puestoLaboral.length > 0) {
          return exp[0].puestoLaboral[0].nombre;
        };
      }
    }
    return 'Desarrollador';
  }

  obtenerEmpresaActual() {
    if (this.perfil.experienciaLaboral !== undefined && this.perfil.experienciaLaboral !== null && this.perfil.experienciaLaboral.length > 0) {
      var exp = this.perfil.experienciaLaboral.filter(x => x.actualmenteTrabajando);
      if (exp.length > 0) {
        return exp[0].empresa;
      }
    }
    return 'Empresa Ejemplo';
  }

  obtenerEmail() {
    if (this.perfil.emails !== undefined && this.perfil.emails !== null && this.perfil.emails.length > 0) {
      var email = this.perfil.emails[0];
      if (email.valor !== '') {
        return email.valor;
      }
    }
    return 'ejemplo@email.com';
  }

  obtenerTelefono() {
    if (this.perfil.telefonos !== undefined && this.perfil.telefonos !== null && this.perfil.telefonos.length > 0) {
      var telefono = this.perfil.telefonos[0];
      if (telefono.valor !== '') {
        return telefono.valor;
      }
    }
    return '11-2226-6666';
  }

  obtenerUbicacion() {
    var ubicaciones: string[] = [];
    if (this.perfil.localidad !== undefined && this.perfil.localidad !== null && this.perfil.localidad.length > 0) {
      var localidad = this.perfil.localidad[0];
      if (localidad.valor !== '') {
        ubicaciones.push(localidad.valor);
      }
    }
    if (this.perfil.ciudad !== undefined && this.perfil.ciudad !== null && this.perfil.ciudad.length > 0) {
      var ciudad = this.perfil.ciudad[0];
      if (ciudad.valor !== '') {
        ubicaciones.push(ciudad.valor);
      }
    }
    if (this.perfil.provinciaResidencia !== undefined && this.perfil.provinciaResidencia !== null && this.perfil.provinciaResidencia.length > 0) {
      var provincia = this.perfil.provinciaResidencia[0];
      if (provincia.valor !== '') {
        ubicaciones.push(provincia.valor);
      }
    }

    return ubicaciones.join(', ');
  }

  getAnio(fecha: Date): string {
    return new Date(fecha).getFullYear().toString();
  }

  getPuesto(el: ExperienciaLaboral): string {
    if (el.puestoLaboral !== undefined && el.puestoLaboral !== null && el.puestoLaboral.length > 0) {
      return el.puestoLaboral[0].nombre;
    }
  }

  getDia(fecha: Date): string {
    return new Date(fecha).getDay().toString();
  }

  getMes(fecha: Date): string {
    switch(new Date(fecha).getMonth() + 1) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Octubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
      default:
        return 'Julio';
    }
  }

  getAnioNacimiento(fecha: Date): string {
    return new Date(fecha).getFullYear().toString();
  }

  getEdad(fecha: Date) {
    return (2019 - new Date(fecha).getFullYear()).toString()
  }
}
