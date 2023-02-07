import { TestBed } from '@angular/core/testing';

import { NewInstituteService } from './new-institute.service';

describe('NewInstituteService', () => {
  let service: NewInstituteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewInstituteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
