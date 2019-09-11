import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgwWowModule } from 'ngx-wow';

import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrearPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    SelectDropDownModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
