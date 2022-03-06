import { TestBed } from '@angular/core/testing';

import { GetItemsResolver } from './get-items.resolver';

describe('GetItemsResolver', () => {
  let resolver: GetItemsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetItemsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
