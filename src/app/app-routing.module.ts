import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
    loadChildren: () =>
      import('./testimonios/testimonios.module').then(
        (m) => m.TestimoniosModule
      ),
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
