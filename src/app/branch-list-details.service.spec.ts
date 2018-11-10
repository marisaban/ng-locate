import { TestBed } from '@angular/core/testing';

import { BranchListDetailsService } from './branch-list-details.service';

describe('BranchListDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchListDetailsService = TestBed.get(BranchListDetailsService);
    expect(service).toBeTruthy();
  });
});
