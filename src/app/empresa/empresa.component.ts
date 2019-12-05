import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Empresa {
  id: string;
  nombre: string;
  cuit: string;
  sitioWeb: string;
  domicilio: string;
  emails: IdValor[] = [];
  telefonos: IdValor[] = [];
  contactoNombre: string;
  contactoApellido: string;
  contactoTelefono: string;
  contactoEmail: string;
  contactoCargo: string;
  contactoNombreUsuario: string;
  alta: string;
  baja: string;
}

export class IdValor {
  id: string;
  valor: string;
}

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa();
  // empresa: Empresa = {
  //   id: null,
  //   nombre: 'Nombre',
  //   sitioWeb: 'www.asd.com.ar',
  //   cuit: '20-35941589-4',
  //   domicilio: 'Las Flores 1600 Torre 26 9°C, Wilde, Buenos Aires',
  //   emails: [{
  //     id: '1',
  //     email: 'lautaroiraneta@gmail.com'
  //   }],
  //   telefonos: [{
  //     id: '1',
  //     telefono: '123123'
  //   }],
  //   contactoNombre: 'Lucas',
  //   contactoApellido: 'Vatano',
  //   contactoTelefono: '4124124',
  //   contactoEmail: 'kvatano@gmail.com',
  //   contactoCargo: 'Project Leader',
  //   contactoNombreUsuario: 'lvatano',
  //   alta: null,
  //   baja: null    
  // }
  
  constructor(private helperService: HelperService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() { 
    var id = this.route.snapshot.params['id'];
    if (id !== 'new') {
      // this.alumno = this.alumnoService.getById(id);
    } else {
      this.empresa = new Empresa();
      this.empresa.emails.push({ id: 'new', valor: '' });
      this.empresa.telefonos.push({ id: 'new', valor: '' });
    }
  }

  agregarEmail() {
    this.helperService.agregarEmail(this.empresa.emails);
  }

  agregarTelefono() {
    this.helperService.agregarTelefono(this.empresa.telefonos);
  }

  eliminarEmail(id: string) {
    this.empresa.emails = this.helperService.eliminarEmail(this.empresa.emails, id);
  }

  eliminarTelefono(id: string) {
    this.empresa.telefonos = this.helperService.eliminarTelefono(this.empresa.telefonos, id);
  }

  onSubmit(form: NgForm) {
    var data = new Empresa();
    data.alta = this.empresa.alta;
    data.baja = this.empresa.baja;
    data.contactoApellido = this.empresa.contactoApellido;
    data.contactoCargo = this.empresa.contactoCargo;
    data.contactoEmail = this.empresa.contactoEmail;
    data.contactoNombre = this.empresa.contactoNombre;
    data.contactoNombreUsuario = this.empresa.contactoNombreUsuario;
    data.contactoTelefono = this.empresa.contactoTelefono;
    data.cuit = this.empresa.cuit;
    data.domicilio = this.empresa.domicilio;
    data.emails = this.empresa.emails;
    data.id = this.empresa.id;
    data.nombre = this.empresa.nombre;
    data.sitioWeb = this.empresa.sitioWeb;
    data.telefonos = this.empresa.telefonos;

    this.http.post('https://localhost:44374/Empresa', data).subscribe(x => {
      alert('Empresa creada!');
    });
    
  }

  isDisabled(): boolean {
    return this.empresa.contactoNombreUsuario !== null && this.empresa.contactoNombreUsuario !== '' && this.empresa.contactoNombreUsuario !== undefined &&
    this.empresa.contactoNombreUsuario !== null && this.empresa.contactoNombreUsuario !== '' && this.empresa.contactoNombreUsuario !== undefined &&
    this.empresa.contactoApellido !== null && this.empresa.contactoApellido !== '' && this.empresa.contactoApellido !== undefined &&
    this.empresa.nombre !== null && this.empresa.nombre !== '' && this.empresa.nombre !== undefined;
  }
}
