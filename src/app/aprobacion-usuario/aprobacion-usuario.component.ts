import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';

export class Usuario {
  id: string;
  nombreUsuario: string;
  password: string;
  tipoUsuario: string;
  alumnoId: string;
  empresaId: string;
  alta: Date;
  aprobado: boolean;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-aprobacion-usuario',
  templateUrl: './aprobacion-usuario.component.html',
  styleUrls: ['./aprobacion-usuario.component.css']
})
export class AprobacionUsuarioComponent implements OnInit {
  usuarios: Usuario[];

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsuarios().subscribe(x => {
      this.usuarios = x.filter(y => y.aprobado === false);
    });
  }

  getTipo(tipo: string) {
    switch (tipo) {
      case 'e':
        return 'Empresa';
      case 'a':
        return 'Alumno';
      case 'u':
        return 'Universidad';
      default:
        return '';
    }
  }

  getFechaIngreso(fecha: string) {
    var aux = new Date(fecha);
    return aux.getDay() + '/' + (aux.getMonth() + 1).toString() + '/' + aux.getFullYear();
  }

  setAprobado(usuario: Usuario, aprobado: boolean) {
    let data = new Usuario();
    data.id = usuario.id;
    data.aprobado = aprobado;

    this.http.post('https://localhost:44374/Usuario/set-aprobado', data).subscribe(x => {
      usuario.aprobado = aprobado;
    });
  }
}