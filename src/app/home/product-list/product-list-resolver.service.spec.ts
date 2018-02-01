import { TestBed, inject } from '@angular/core/testing';

import { ProductListResolver } from './product-list-resolver.service';

describe('ProductListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListResolver]
    });
  });

  it('should be created', inject([ProductListResolver], (service: ProductListResolver) => {
    expect(service).toBeTruthy();
  }));
});
