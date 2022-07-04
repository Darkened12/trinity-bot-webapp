import { TestBed } from '@angular/core/testing';

import { StringMatchingService } from './string-matching.service';

describe('StringMatchingService', () => {
  let service: StringMatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringMatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
