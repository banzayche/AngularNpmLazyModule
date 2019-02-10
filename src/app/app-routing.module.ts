import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'from-node_modules-level1',
    children: [
      {
        path: '',
        loadChildren: () => import('lazy-module-lib').then((res) => res.LazyModuleLibModule)
      }
    ]
  }
];


@NgModule({
  // useHash added to be able check working of prod files with node http-server
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
