import { TestBed } from '@angular/core/testing';

import { PostlogService } from './postlog.service';

describe('PostlogService', () => {
  let service: PostlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
