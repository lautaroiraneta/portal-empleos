import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  perfil = {
    nombres: 'Nombres',
    apellidos: 'Apellidos',
    emails: [{
      id: '1',
      email: 'email1@gmail.com'
    }, {
      id: '2',
      email: 'email2@gmail.com'
    }],
    telefonos: [{
      id: '1',
      telefono: '1234567'
    }, {
      id: '2',
      telefono: '578786'
    }]
  };

  constructor() { }

  ngOnInit() {
    
  }

  agregarEmail() {
    this.perfil.emails.push({ id: (this.perfil.emails[this.perfil.emails.length - 1].id + 1).toString(), email: 'email3@gmail.com'});
  }

  eliminarEmail(id: string) {
    this.perfil.emails = this.perfil.emails.filter(x => x.id !== id);

    if (this.perfil.emails.length === 0) {
      this.perfil.emails.push({ id: '1', email: '' });
    }
  }

  agregarTelefono() {
    this.perfil.telefonos.push({ id: (this.perfil.telefonos[this.perfil.telefonos.length - 1].id + 1).toString(), telefono: '994949'});
  }

  eliminarTelefono(id: string) {
    this.perfil.telefonos = this.perfil.telefonos.filter(x => x.id !== id);

    if (this.perfil.telefonos.length === 0) {
      this.perfil.telefonos.push({ id: '1', telefono: '' });
    }
  }
}
