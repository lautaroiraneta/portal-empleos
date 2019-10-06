import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MateriaComponent } from './materia/materia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SubtareaComponent } from './subtarea/subtarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareaDefectoComponent } from './tarea-defecto/tarea-defecto.component';
import { AgregarConocimientosComponent } from './agregar-conocimientos/agregar-conocimientos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { MicrositioComponent } from './micrositio/micrositio.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'agregar-conocimientos-a-mi-perfil', component: AgregarConocimientosComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'micrositio', component: MicrositioComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'subtarea', component: SubtareaComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tarea-defecto', component: TareaDefectoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}