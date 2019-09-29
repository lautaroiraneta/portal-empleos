import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MateriaComponent } from './materia/materia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SubtareaComponent } from './subtarea/subtarea.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'subtarea', component: SubtareaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}