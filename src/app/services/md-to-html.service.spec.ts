import { TestBed } from '@angular/core/testing';

import { MdToHtmlService } from './md-to-html.service';

describe('MdToHtmlService', () => {
  let service: MdToHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdToHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
