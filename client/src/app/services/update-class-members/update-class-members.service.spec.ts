import { TestBed } from '@angular/core/testing';

import { UpdateClassMembersService } from './update-class-members.service';

describe('UpdateClassMembersService', () => {
  let service: UpdateClassMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateClassMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
