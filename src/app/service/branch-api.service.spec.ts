import { TestBed } from '@angular/core/testing';

import { BranchAPIService } from './branch-api.service';
import { ListBranchesComponent } from './../list-branches/list-branches.component';


describe('BranchAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ ListBranchesComponent ],
    providers: [ BranchAPIService ]
  }));

  it('should be created', () => {
    const service: BranchAPIService = TestBed.get(BranchAPIService);
    expect(service).toBeTruthy();
  });
});
