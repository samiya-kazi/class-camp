import { TestBed } from '@angular/core/testing';

import { UpdateAssignmentsService } from './update-assignments.service';

describe('UpdateAssignmentsService', () => {
  let service: UpdateAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
