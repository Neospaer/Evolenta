import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostInfoComponent } from './post-info/post-info.component';
import { PreFetchingResolver } from './pre-fetching.resolver';

const routes: Routes = [
  {
    path: 'post-detail',
    component: PostInfoComponent,
    resolve: {post: PreFetchingResolver}
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
