import { TestBed, inject } from '@angular/core/testing';

import { LocationGuardService } from './location-guard.service.service';

describe('LocationGuard.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationGuardService]
    });
  });

  it('should be created', inject([LocationGuardService], (service: LocationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
