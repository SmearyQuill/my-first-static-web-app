import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionesRoutingModule } from './versiones-routing.module';
import { RadarControlTotalComponent } from './radar-control-total/radar-control-total.component';
import { RadarLiteComponent } from './radar-lite/radar-lite.component';
import { HeroVersionesComponent } from './hero-versiones/hero-versiones.component';
import { InformacionVersionComponent } from './informacion-version/informacion-version.component';
import { ProcesoImplementacionComponent } from './proceso-implementacion/proceso-implementacion.component';


@NgModule({
  declarations: [
    RadarControlTotalComponent,
    RadarLiteComponent,
    HeroVersionesComponent,
    InformacionVersionComponent,
    ProcesoImplementacionComponent,
  ],
  imports: [
    CommonModule,
    VersionesRoutingModule
  ]
})
export class VersionesModule { }
