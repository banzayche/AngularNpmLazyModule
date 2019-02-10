import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModuleLibComponent } from './lazy-module-lib.component';

const routes: Routes = [
  {
    path: '',
    component: LazyModuleLibComponent,
    children: [
      {
        path: 'from-node_modules-level2',
        loadChildren: './lazy-child/lazy-child.module#LazyChildModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleLibRoutingModule {}
