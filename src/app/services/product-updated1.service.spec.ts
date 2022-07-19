import { TestBed } from '@angular/core/testing';

import { ProductUpdated1Service } from './product-updated1.service';

describe('ProductUpdated1Service', () => {
  let service: ProductUpdated1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductUpdated1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
