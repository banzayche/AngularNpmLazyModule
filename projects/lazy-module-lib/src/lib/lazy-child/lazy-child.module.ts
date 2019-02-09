import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyChildComponent } from './lazy-child.component';
import { LazyChildRoutingModule } from './lazy-child-routing.module';

@NgModule({
  declarations: [
    LazyChildComponent
  ],
  imports: [
    LazyChildRoutingModule,
  ],
  providers: []
})
export class LazyChildModule { }
