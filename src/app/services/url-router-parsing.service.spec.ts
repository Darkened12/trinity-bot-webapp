import { TestBed } from '@angular/core/testing';

import { UrlRouterParsingService } from './url-router-parsing.service';

describe('UrlRouterParsingService', () => {
  let service: UrlRouterParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlRouterParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
