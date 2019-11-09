import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MateriaComponent } from './materia/materia.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { SubtareaComponent } from './subtarea/subtarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareaDefectoComponent } from './tarea-defecto/tarea-defecto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularMyDatePickerModule,
    NgbModule,
    NgxMaterialTimepickerModule
  ],
  declarations: [
    AppComponent,
    CrearPerfilComponent,
    AlumnoComponent,
    CarreraComponent,
    EmpresaComponent,
    MateriaComponent,
    NoticiaComponent,
    SubtareaComponent,
    TareaComponent,
    TareaDefectoComponent,
    AgregarConocimientosComponent,
    EquipoComponent,
    MicrositioComponent,
    PreferenciasComponent,
    ControlConocimientosPuestosComponent,
    AcuerdoIndividualComponent,
    ConvenioComponent,
    EtapaDefinicionConvenioComponent,
    EtapaPasantiaCursoComponent,
    PropuestaComponent,
    EquipoListComponent,
    AlertasListComponent,
    AlumnoListComponent,
    ConvenioListComponent,
    EtapaCierrePasantiaListComponent,
    EtapaIngresoAlumnoListComponent,
    EmpresaListComponent,
    PreferenciasListComponent,
    PropuestaListComponent,
    PerfilComponent,
    MicrositioEmpresaComponent,
    PropuestaViewComponent,
    TareaDefectoListComponent,
    AprobacionUsuarioComponent,
    GestionUsuarioComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }