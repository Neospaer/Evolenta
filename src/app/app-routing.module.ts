import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusPipe } from './plus.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
