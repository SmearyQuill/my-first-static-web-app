import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: ':id',
    component: PostPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
