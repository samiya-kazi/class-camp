import { TestBed } from '@angular/core/testing';

import { UpdateInstituteClassesService } from './update-institute-classes.service';

describe('UpdateInstituteClassesService', () => {
  let service: UpdateInstituteClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateInstituteClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
