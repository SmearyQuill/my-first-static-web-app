import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionesComponent } from './Componentes/versiones/versiones.component';
import { HerramientasComponent } from './Componentes/herramientas/herramientas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { SabiasQueCardComponent } from './Componentes/sabias-que-card/sabias-que-card.component';
import { TestimonioCardComponent } from './Componentes/testimonio-card/testimonio-card.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    VersionesComponent,
    HerramientasComponent,
    ContactanosComponent,
    MenuComponent,
    SabiasQueCardComponent,
    TestimonioCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
