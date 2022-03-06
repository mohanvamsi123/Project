import { TestBed } from '@angular/core/testing';

import { GetCustomerResolver } from './get-customer.resolver';

describe('GetCustomerResolver', () => {
  let resolver: GetCustomerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetCustomerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
