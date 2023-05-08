import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
