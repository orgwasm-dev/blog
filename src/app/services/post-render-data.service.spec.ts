import { TestBed } from '@angular/core/testing';

import { PostRenderDataService } from './post-render-data.service';

describe('PostRenderDataService', () => {
  let service: PostRenderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRenderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
