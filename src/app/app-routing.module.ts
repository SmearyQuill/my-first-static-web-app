import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionesComponent } from './Componentes/versiones/versiones.component';
import { HerramientasComponent } from './Componentes/herramientas/herramientas.component';
import { TestimoniosComponent } from './Componentes/testimonios/testimonios.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';
const routes: Routes = [
  {
    path:'',
    component : VersionesComponent
  },
  {
    path:'herramientas',
    component : HerramientasComponent
  },
  {
    path:'testimonios',
    component : TestimoniosComponent
  },
  {
    path:'contactanos',
    component : ContactanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
