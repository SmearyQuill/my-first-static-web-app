import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionesComponent } from './Componentes/versiones/versiones.component';
import { HerramientasComponent } from './Componentes/herramientas/herramientas.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { SabiasQueCardComponent } from './Componentes/sabias-que-card/sabias-que-card.component';
import { TestimonioCardComponent } from './Componentes/testimonio-card/testimonio-card.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VersionesComponent,
    HerramientasComponent,
    TestimoniosComponent,
    ContactanosComponent,
    MenuComponent,
    SabiasQueCardComponent,
    TestimonioCardComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
