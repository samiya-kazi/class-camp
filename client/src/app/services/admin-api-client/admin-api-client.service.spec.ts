import { TestBed } from '@angular/core/testing';

import { AdminApiClientService } from './admin-api-client.service';

describe('AdminApiClientService', () => {
  let service: AdminApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
