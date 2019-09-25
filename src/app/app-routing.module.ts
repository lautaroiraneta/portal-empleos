import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'carrera', component: CarreraComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}