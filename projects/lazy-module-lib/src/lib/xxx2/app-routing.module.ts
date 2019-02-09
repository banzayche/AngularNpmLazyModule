import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppX2Component } from './app.component';

const routes: Routes = [
  { path: '', component: AppX2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleXXX2 { }
