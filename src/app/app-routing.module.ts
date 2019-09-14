import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'crear-perfil', component: CrearPerfilComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}