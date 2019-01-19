import { TestBed } from '@angular/core/testing';

import { BanduserService } from './banduser.service';

describe('BanduserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanduserService = TestBed.get(BanduserService);
    expect(service).toBeTruthy();
  });
});
