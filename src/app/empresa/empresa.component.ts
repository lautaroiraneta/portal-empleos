import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

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
  password: string;
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
  
  constructor(private helperService: HelperService, private route: ActivatedRoute, private http: HttpClient, private router: Router, private appComponent: AppComponent) { }

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
    data.password = this.empresa.password;

    this.http.post('https://localhost:44374/Empresa', data).subscribe(x => {
      alert('Empresa creada! Espere la aprobación de la Universidad para poder ingresar.');
      this.router.navigate(['login']);
    }, error => {
      alert('Ya existe un usuario con ese nombre!');
    });    
  }

  isDisabled(): boolean {
    return this.empresa.contactoNombreUsuario !== null && this.empresa.contactoNombreUsuario !== '' && this.empresa.contactoNombreUsuario !== undefined &&
    this.empresa.contactoNombreUsuario !== null && this.empresa.contactoNombreUsuario !== '' && this.empresa.contactoNombreUsuario !== undefined &&
    this.empresa.contactoApellido !== null && this.empresa.contactoApellido !== '' && this.empresa.contactoApellido !== undefined &&
    this.empresa.nombre !== null && this.empresa.nombre !== '' && this.empresa.nombre !== undefined;
  }
}
