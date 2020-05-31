import { TestBed } from '@angular/core/testing';

import { RandomQueryService } from './random-query.service';

describe('RandomQueryService', () => {
  let service: RandomQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
