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
    PropuestaComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }