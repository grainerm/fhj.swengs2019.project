import { TestBed } from '@angular/core/testing';

import { BandService } from './band.service';

describe('BandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandService = TestBed.get(BandService);
    expect(service).toBeTruthy();
  });
});
