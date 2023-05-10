import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';
import { HeroComponent } from './hero/hero.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostGridComponent } from './post-grid/post-grid.component';
import { PostPageComponent } from './post-page/post-page.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeroComponent,
    PostListComponent,
    PostCardComponent,
    PostGridComponent,
    PostPageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
