import { TestBed } from '@angular/core/testing';

import { AdminApiClientServiceService } from './admin-api-client-service.service';

describe('AdminApiClientServiceService', () => {
  let service: AdminApiClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApiClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
