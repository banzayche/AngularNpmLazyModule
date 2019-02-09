import { Component } from '@angular/core';

@Component({
  selector: 'lib-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent {
  title = 'lazy';
  constructor() {
  }
}
