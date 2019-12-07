import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';
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
import { AlertasListComponent } from './alertas-list/alertas-list.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { ConvenioListComponent } from './convenio-list/convenio-list.component';
import { EtapaCierrePasantiaListComponent } from './etapa-cierre-pasantia-list/etapa-cierre-pasantia-list.component';
import { EtapaIngresoAlumnoListComponent } from './etapa-ingreso-alumno-list/etapa-ingreso-alumno-list.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { PreferenciasListComponent } from './preferencias-list/preferencias-list.component';
import { PropuestaListComponent } from './propuesta-list/propuesta-list.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MicrositioEmpresaComponent } from './micrositio-empresa/micrositio-empresa.component';
import { PropuestaViewComponent } from './propuesta-view/propuesta-view.component';
import { TareaDefectoListComponent } from './tarea-defecto-list/tarea-defecto-list.component';
import { AprobacionUsuarioComponent } from './aprobacion-usuario/aprobacion-usuario.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { TareaViewComponent } from './tarea-view/tarea-view.component';
import { AdvertenciaListComponent } from './advertencia-list/advertencia-list.component';
import { ConocimientoListComponent } from './conocimiento-list/conocimiento-list.component';
import { LoginComponent } from './login/login.component';
import { EtapaComponent } from './etapa/etapa.component';
import { EtapaSeleccionAlumnoListComponent } from './etapa-seleccion-alumno-list/etapa-seleccion-alumno-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'acuerdo-individual', component: AcuerdoIndividualComponent },
  { path: 'advertencia-list', component: AdvertenciaListComponent },
  { path: 'agregar-conocimientos-a-mi-perfil', component: AgregarConocimientosComponent },
  { path: 'alertas-list', component: AlertasListComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'alumno-list', component: AlumnoListComponent },
  { path: 'aprobacion-usuario', component: AprobacionUsuarioComponent },
  { path: 'carrera', component: CarreraComponent },
  { path: 'conocimiento-list', component: ConocimientoListComponent },
  { path: 'control-conocimientos-puestos', component: ControlConocimientosPuestosComponent },
  { path: 'convenio/:etapa/:empresa', component: ConvenioComponent },
  { path: 'convenio-list', component: ConvenioListComponent },
  { path: 'crear-perfil', component: CrearPerfilComponent },
  { path: 'empresa/:id', component: EmpresaComponent },
  { path: 'empresa-list', component: EmpresaListComponent },
  { path: 'etapa/:id/:tipo', component: EtapaComponent},
  { path: 'etapa-definicion-convenio', component: EtapaDefinicionConvenioComponent },
  { path: 'etapa-pasantia-curso', component: EtapaPasantiaCursoComponent },
  { path: 'etapa-cierre-pasantia-list', component: EtapaCierrePasantiaListComponent },
  { path: 'etapa-ingreso-alumno-list', component: EtapaIngresoAlumnoListComponent },
  { path: 'etapa-seleccion-alumno-list', component: EtapaSeleccionAlumnoListComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'equipo-list', component: EquipoListComponent },
  { path: 'gestion-usuario', component: GestionUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'micrositio', component: MicrositioComponent },
  { path: 'micrositio-empresa', component: MicrositioEmpresaComponent },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'preferencias', component: PreferenciasComponent },
  { path: 'preferencias-list', component: PreferenciasListComponent },
  { path: 'propuesta', component: PropuestaComponent },
  { path: 'propuesta-list', component: PropuestaListComponent },
  { path: 'propuesta-view/:id', component: PropuestaViewComponent },
  { path: 'subtarea', component: SubtareaComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tarea-defecto', component: TareaDefectoComponent },
  { path: 'tarea-defecto-list', component: TareaDefectoListComponent },
  { path: 'tarea-view/:id', component: TareaViewComponent }


  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}