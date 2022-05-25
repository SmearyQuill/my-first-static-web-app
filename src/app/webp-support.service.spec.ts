import { TestBed } from '@angular/core/testing';

import { WebpSupportService } from './webp-support.service';

describe('WebpSupportService', () => {
  let service: WebpSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
