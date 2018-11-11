import { TestBed } from '@angular/core/testing';

import { BranchListService } from './branch-list.service';

describe('BranchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchListService = TestBed.get(BranchListService);
    expect(service).toBeTruthy();
  });
});
