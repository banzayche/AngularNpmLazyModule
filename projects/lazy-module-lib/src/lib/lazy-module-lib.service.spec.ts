import { TestBed } from '@angular/core/testing';

import { LazyModuleLibService } from './lazy-module-lib.service';

describe('LazyModuleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyModuleLibService = TestBed.get(LazyModuleLibService);
    expect(service).toBeTruthy();
  });
});
