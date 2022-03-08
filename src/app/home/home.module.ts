import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { MarcasComponent } from './marcas/marcas.component';
import { VersionesComponent } from './versiones/versiones.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PresentacionComponent,
    BeneficiosComponent,
    HerramientasComponent,
    MarcasComponent,
    VersionesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
