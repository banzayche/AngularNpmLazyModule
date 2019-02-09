import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyChildComponent } from './lazy-child.component';

const routes: Routes = [
  { path: '', component: LazyChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyChildRoutingModule { }
