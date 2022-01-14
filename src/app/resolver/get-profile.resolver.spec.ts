import { TestBed } from '@angular/core/testing';

import { GetProfileResolver } from './get-profile.resolver';

describe('GetProfileResolver', () => {
  let resolver: GetProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
