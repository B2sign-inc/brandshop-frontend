import { TestBed, inject } from '@angular/core/testing';

import { CartResolver } from './cart-resolver.service';

describe('CartResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartResolver]
    });
  });

  it('should be created', inject([CartResolver], (service: CartResolver) => {
    expect(service).toBeTruthy();
  }));
});
