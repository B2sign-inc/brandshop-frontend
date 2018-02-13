import { TestBed, inject } from '@angular/core/testing';

import { UsStateService } from './us-state.service';

describe('UsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsStateService]
    });
  });

  it('should be created', inject([UsStateService], (service: UsStateService) => {
    expect(service).toBeTruthy();
  }));
});
