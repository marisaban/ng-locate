import { Injectable } from '@angular/core';
import { BranchAPIService } from './branch-api.service';

@Injectable({
  providedIn: 'root'
})
export class BranchListService {

  public branches = [];

  constructor(private branchAPIService: BranchAPIService) { }

  do() {
    this.branchAPIService.getBranches()
        .subscribe(data => this.branches = data);
  }

}
