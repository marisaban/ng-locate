import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BranchListService } from '../service/branch-list.service';

// for testing
import { BranchAPIService } from '../service/branch-api.service';
import { Branches } from '../branches'

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchListService]
})
export class ListBranchesComponent implements OnInit {

  branches: Branches[] = [];

  constructor(private branchListService: BranchListService,
              private branchAPIService: BranchAPIService,
              private httpClient: HttpClient) { }

  public isExpanded: boolean;

  ngOnInit() {
  }

  toggleView(){
    this.isExpanded = !this.isExpanded;
  }

}
