import { Component, OnInit } from '@angular/core';

import { BranchListService } from '../service/branch-list.service';

// for testing
import { BranchAPIService } from '../service/branch-api.service';
import { Branches } from '../branches'

import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchListService]
})
export class ListBranchesComponent implements OnInit {

  branches: Branches[] = [];

  constructor(private branchListService: BranchListService, private branchAPIService: BranchAPIService) { }

  public isExpanded: boolean;

  ngOnInit() {
    this.do();
  }

  do() {
    this.branchAPIService.getBranches().subscribe(
      data => {
        this.branches = data
      },
      err => console.error(err),
      () => console.log('hi')
    );
    console.log(this.branches)
  }

  toggleView(){
    this.isExpanded = !this.isExpanded;
  }

}
