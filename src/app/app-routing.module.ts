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
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { ControlConocimientosPuestosComponent } from './control-conocimientos-puestos/control-conocimientos-puestos.component';
import { AcuerdoIndividualComponent } from './acuerdo-individual/acuerdo-individual.component';
import { ConvenioComponent } from './convenio/convenio.component';
import { EtapaDefinicionConvenioComponent } from './etapa-definicion-convenio/etapa-definicion-convenio.component';
import { EtapaPasantiaCursoComponent } from './etapa-pasantia-curso/etapa-pasantia-curso.component';
import { PropuestaComponent } from './propuesta/propuesta.component';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { PreferenciasListComponent } from './preferencias-list/preferencias-list.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/crear-perfil', pathMatch: 'full' },
  { path: 'acuerdo-individual', component: AcuerdoIndividualComponent },
  { path: 'agregar-conocimientos-a-mi-perfil', component: AgregarConocimientosComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'alumno-list', component: AlumnoListComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'control-conocimientos-puestos', component: ControlConocimientosPuestosComponent },
  { path: 'convenio', component: ConvenioComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'etapa-definicion-convenio', component: EtapaDefinicionConvenioComponent },
  { path: 'etapa-pasantia-curso', component: EtapaPasantiaCursoComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'equipo-list', component: EquipoListComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'micrositio', component: MicrositioComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'preferencias', component: PreferenciasComponent },
  { path: 'preferencias-list', component: PreferenciasListComponent },
  { path: 'propuesta', component: PropuestaComponent },
  { path: 'subtarea', component: SubtareaComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tarea-defecto', component: TareaDefectoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}