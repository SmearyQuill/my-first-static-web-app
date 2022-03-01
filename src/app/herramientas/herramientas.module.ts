import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { RadarConsultingComponent } from './radar-consulting/radar-consulting.component';
import { RadarAcademyComponent } from './radar-academy/radar-academy.component';
import { RadarConnectComponent } from './radar-connect/radar-connect.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';


@NgModule({
  declarations: [
    RadarConsultingComponent,
    RadarAcademyComponent,
    RadarConnectComponent,
    HeroTitleComponent
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule
  ]
})
export class HerramientasModule { }
