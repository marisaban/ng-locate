import { Component, OnInit } from '@angular/core';

import { BranchListService } from '../branch-list.service';

// for testing
import { BranchAPIService } from '../branch-api.service';
import { Branches } from '../branches'



@Component({
  selector: 'app-list-banks',
  templateUrl: './list-banks.component.html',
  styleUrls: ['./list-banks.component.css'],
  providers: [BranchListService]
})
export class ListBanksComponent implements OnInit {

  // remove after testing
  branches: Branches[];

  constructor(private branchListService: BranchListService, private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.do();
  }

  do() {
    this.branchAPIService.getBranches()
    .subscribe(
      data => {
        this.branches = data;
        console.log(this.branches);
      });
  }

}
