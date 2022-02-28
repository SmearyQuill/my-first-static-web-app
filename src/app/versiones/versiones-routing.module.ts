import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarControlTotalComponent } from './radar-control-total/radar-control-total.component';
import { RadarLiteComponent } from './radar-lite/radar-lite.component';
const routes: Routes = [
  {
    path: '',
    component: RadarControlTotalComponent,
  },
  {
    path: 'radarLite',
    component: RadarLiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionesRoutingModule {}
