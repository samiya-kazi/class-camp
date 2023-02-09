import { TestBed } from '@angular/core/testing';

import { ClassGuard } from './class.guard';

describe('ClassGuard', () => {
  let guard: ClassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
