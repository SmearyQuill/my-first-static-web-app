import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniosRoutingModule } from './testimonios-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { CardTestimonioComponent } from './card-testimonio/card-testimonio.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeroComponent,
    CardTestimonioComponent
  ],
  imports: [
    CommonModule,
    TestimoniosRoutingModule
  ]
})
export class TestimoniosModule { }
