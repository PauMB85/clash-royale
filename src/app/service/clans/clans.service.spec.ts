import { TestBed, inject } from '@angular/core/testing';

import { ClansService } from './clans.service';

describe('ClansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClansService]
    });
  });

  it('should be created', inject([ClansService], (service: ClansService) => {
    expect(service).toBeTruthy();
  }));
});
