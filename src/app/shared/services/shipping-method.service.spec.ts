import { TestBed, inject } from '@angular/core/testing';

import { ShippingMethodService } from './shipping-method.service';

describe('ShippingMethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingMethodService]
    });
  });

  it('should be created', inject([ShippingMethodService], (service: ShippingMethodService) => {
    expect(service).toBeTruthy();
  }));
});
