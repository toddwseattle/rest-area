import { TestBed, inject } from '@angular/core/testing';

import { GoogleTagService } from './google-tag.service';

describe('GoogleTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleTagService]
    });
  });

  it('should be created', inject([GoogleTagService], (service: GoogleTagService) => {
    expect(service).toBeTruthy();
  }));
});
