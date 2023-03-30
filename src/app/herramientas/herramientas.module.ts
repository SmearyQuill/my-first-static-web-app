import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { RadarConsultingComponent } from './radar-consulting/radar-consulting.component';
import { RadarAcademyComponent } from './radar-academy/radar-academy.component';
import { RadarConnectComponent } from './radar-connect/radar-connect.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { InformacionHerramientaComponent } from './informacion-herramienta/informacion-herramienta.component';
import { VisitarAcademyComponent } from './visitar-academy/visitar-academy.component';
import { CapacitacionAcademyComponent } from './capacitacion-academy/capacitacion-academy.component';
import { CertificacionAcademyComponent } from './certificacion-academy/certificacion-academy.component';
import { EquipoAcademyComponent } from './equipo-academy/equipo-academy.component';
import { SeguimientoSemanalComponent } from './seguimiento-semanal/seguimiento-semanal.component';
import { BannerResultadosComponent } from './banner-resultados/banner-resultados.component';
import { SeccionCompromisosComponent } from './seccion-compromisos/seccion-compromisos.component';
import { AppFuncionesComponent } from './app-funciones/app-funciones.component';
import { NuestroCompromisoComponent } from './nuestro-compromiso/nuestro-compromiso.component';
import { SeccionAndroidComponent } from './seccion-android/seccion-android.component';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { MiniHeroConnectComponent } from './mini-hero-connect/mini-hero-connect.component';


@NgModule({
  declarations: [
    RadarConsultingComponent,
    RadarAcademyComponent,
    RadarConnectComponent,
    HeroTitleComponent,
    InformacionHerramientaComponent,
    VisitarAcademyComponent,
    CapacitacionAcademyComponent,
    CertificacionAcademyComponent,
    EquipoAcademyComponent,
    SeguimientoSemanalComponent,
    BannerResultadosComponent,
    SeccionCompromisosComponent,
    AppFuncionesComponent,
    NuestroCompromisoComponent,
    SeccionAndroidComponent,
    FotografiasComponent,
    MiniHeroConnectComponent
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule
  ]
})
export class HerramientasModule { }
