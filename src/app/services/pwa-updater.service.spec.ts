import { TestBed } from '@angular/core/testing';

import { PwaUpdaterService } from './pwa-updater.service';

describe('PwaUpdaterService', () => {
  let service: PwaUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
