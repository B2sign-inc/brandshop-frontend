import { TestBed, inject } from '@angular/core/testing';

import { EmailMessageService } from './email-message.service';

describe('EmailMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailMessageService]
    });
  });

  it('should be created', inject([EmailMessageService], (service: EmailMessageService) => {
    expect(service).toBeTruthy();
  }));
});
