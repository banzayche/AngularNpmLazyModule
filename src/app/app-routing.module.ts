import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'xxx', pathMatch: 'full' },
  { path: 'xxx',
    children: [
      { path: '', loadChildren: 'lazy-module-lib#LazyModuleLibModule' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
