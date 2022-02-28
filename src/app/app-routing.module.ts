import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionesComponent } from './Componentes/versiones/versiones.component';
import { HerramientasComponent } from './Componentes/herramientas/herramientas.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'versiones',
    // component : HerramientasComponent
    loadChildren: () =>
      import('./versiones/versiones.module').then((m) => m.VersionesModule),
  },
  {
    path: 'herramientas',
    // component : HerramientasComponent
    loadChildren: () =>
      import('./herramientas/herramientas.module').then(
        (m) => m.HerramientasModule
      ),
  },
  {
    path: 'testimonios',
    component: TestimoniosComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
