import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MateriaComponent } from './materia/materia.component';
import { NoticiaComponent } from './noticia/noticia.component';

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
    AngularMyDatePickerModule
  ],
  declarations: [
    AppComponent,
    CrearPerfilComponent,
    AlumnoComponent,
    CarreraComponent,
    EmpresaComponent,
    MateriaComponent,
    NoticiaComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }