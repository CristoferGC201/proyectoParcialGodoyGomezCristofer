import { TestBed } from '@angular/core/testing';

import { PerrosServiceService } from './perros-service.service';

describe('PerrosServiceService', () => {
  let service: PerrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
