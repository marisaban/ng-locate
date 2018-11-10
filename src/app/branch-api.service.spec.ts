import { TestBed } from '@angular/core/testing';

import { BranchAPIService } from './branch-api.service';

describe('BranchAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchAPIService = TestBed.get(BranchAPIService);
    expect(service).toBeTruthy();
  });
});
