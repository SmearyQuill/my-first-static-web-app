import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { RadarConsultingComponent } from './radar-consulting/radar-consulting.component';
import { RadarAcademyComponent } from './radar-academy/radar-academy.component';
import { RadarConnectComponent } from './radar-connect/radar-connect.component';


@NgModule({
  declarations: [
    RadarConsultingComponent,
    RadarAcademyComponent,
    RadarConnectComponent
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule
  ]
})
export class HerramientasModule { }
