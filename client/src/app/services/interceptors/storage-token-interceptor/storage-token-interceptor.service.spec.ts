import { TestBed } from '@angular/core/testing';

import { StorageTokenInterceptorService } from './storage-token-interceptor.service';

describe('StorageTokenInterceptorService', () => {
  let service: StorageTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
