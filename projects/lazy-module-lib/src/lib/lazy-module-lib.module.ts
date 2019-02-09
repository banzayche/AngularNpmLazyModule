import { NgModule } from '@angular/core';
import { LazyModuleLibComponent } from './lazy-module-lib.component';
import { LazyModuleLibRoutingModule } from './lazy-module-lib-routing.module';

@NgModule({
  declarations: [LazyModuleLibComponent],
  imports: [
    LazyModuleLibRoutingModule
  ],
  exports: [LazyModuleLibComponent]
})
export class LazyModuleLibModule { }
