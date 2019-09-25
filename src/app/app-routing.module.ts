import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'empresa', component: EmpresaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}