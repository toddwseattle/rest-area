import { TestBed, inject } from '@angular/core/testing';

import { RestXService } from './rest-x.service';

describe('RestXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestXService]
    });
  });

  it('should be created', inject([RestXService], (service: RestXService) => {
    expect(service).toBeTruthy();
  }));
});
