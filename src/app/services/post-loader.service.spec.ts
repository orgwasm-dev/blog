import { TestBed } from '@angular/core/testing';

import { PostLoaderService } from './post-loader.service';

describe('PostLoaderService', () => {
  let service: PostLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
