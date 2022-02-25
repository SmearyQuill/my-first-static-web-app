import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionesComponent } from './Componentes/versiones/versiones.component';
import { HerramientasComponent } from './Componentes/herramientas/herramientas.component';
import { TestimoniosComponent } from './Componentes/testimonios/testimonios.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';
import { MenuComponent } from './Componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionesComponent,
    HerramientasComponent,
    TestimoniosComponent,
    ContactanosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
