import { TestBed } from '@angular/core/testing';

import { NewInstituteMemberService } from './new-institute-member.service';

describe('NewInstituteMemberService', () => {
  let service: NewInstituteMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewInstituteMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
