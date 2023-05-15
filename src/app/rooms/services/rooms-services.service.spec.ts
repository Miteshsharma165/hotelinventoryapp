import { TestBed } from '@angular/core/testing';

import { RoomsServicesService } from './rooms-services.service';

describe('RoomsServicesService', () => {
  let service: RoomsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
