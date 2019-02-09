import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModuleLibComponent } from './lazy-module-lib.component';

const routes: Routes = [
  {
    path: '',
    component: LazyModuleLibComponent,
    children: [
      { path: 'nested', loadChildren: './xxx2/app.module#AppModuleXXX2' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleLibRoutingModule {}
