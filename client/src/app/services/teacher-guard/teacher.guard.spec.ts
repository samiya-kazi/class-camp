import { TestBed } from '@angular/core/testing';

import { TeacherGuard } from './teacher.guard';

describe('TeacherGuardGuard', () => {
  let guard: TeacherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
