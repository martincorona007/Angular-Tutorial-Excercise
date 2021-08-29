import { TestBed } from '@angular/core/testing';

import { PostblogService } from './postblog.service';

describe('PostblogService', () => {
  let service: PostblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
