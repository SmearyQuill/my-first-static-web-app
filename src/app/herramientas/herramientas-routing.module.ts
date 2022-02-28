import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarAcademyComponent } from './radar-academy/radar-academy.component';
import { RadarConnectComponent } from './radar-connect/radar-connect.component';
import { RadarConsultingComponent } from './radar-consulting/radar-consulting.component';

const routes: Routes = [
  {
    path: '',
    component: RadarConsultingComponent,
  },
  {
    path: 'radarAcademy',
    component: RadarAcademyComponent,
  },
  {
    path: 'radarConnect',
    component: RadarConnectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasRoutingModule {}
