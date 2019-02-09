import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModuleLibComponent } from './lazy-module-lib.component';

describe('LazyModuleLibComponent', () => {
  let component: LazyModuleLibComponent;
  let fixture: ComponentFixture<LazyModuleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModuleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModuleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
