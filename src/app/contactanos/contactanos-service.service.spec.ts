import { TestBed } from '@angular/core/testing';

import { ContactanosServiceService } from './contactanos-service.service';

describe('ContactanosServiceService', () => {
  let service: ContactanosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactanosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
