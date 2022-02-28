import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionesRoutingModule } from './versiones-routing.module';
import { RadarControlTotalComponent } from './radar-control-total/radar-control-total.component';
import { RadarLiteComponent } from './radar-lite/radar-lite.component';


@NgModule({
  declarations: [
    RadarControlTotalComponent,
    RadarLiteComponent
  ],
  imports: [
    CommonModule,
    VersionesRoutingModule
  ]
})
export class VersionesModule { }
