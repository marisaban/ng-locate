import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// use branch-api directly instead of branch-list
// import { BranchListService } from '../service/branch-list.service';
import { BranchAPIService } from '../service/branch-api.service';

import { Branches } from '../branches'

import { Observable } from 'rxjs';
import {catchError, map, tap, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';
  branches: Branches[] = [];

  constructor(private branchAPIService: BranchAPIService,
              private httpClient: HttpClient) { }

  public isExpanded: boolean;

  ngOnInit() {
    this.branchAPIService.getBranches()
    .subscribe((branches: Branches[]) => {
      this.branches = branches;
      console.log('branches!!!! ', this.branches);
    })

  }

  toggleView(){
    this.isExpanded = !this.isExpanded;
  }

}


