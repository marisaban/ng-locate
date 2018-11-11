import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// use branch-api directly instead of branch-list
// import { BranchListService } from '../service/branch-list.service';
import { BranchAPIService } from '../service/branch-api.service';

import { Branches } from '../branches'

import { Observable } from 'rxjs';
import {catchError, map, tap, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

// create interface
interface myData {
  data: Object,
  brand: Object,
  branch: Object
}

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';
  branches: Branches[] = [];

   records = [];
  //records = {};

  constructor(private branchAPIService: BranchAPIService,
              private httpClient: HttpClient) { }

  public isExpanded: boolean;

  ngOnInit() {
    // this.branchAPIService.getBranches()
    // .subscribe((branches: Branches[]) => {
    //   this.branches = branches;
    //   console.log('branches!!!! ', this.branches);
    // })

    this.branchAPIService.getData()
    .subscribe(data => {
      this.records = data.data[0].Brand[0].Branch
      console.log(data.data[0].Brand[0].Branch[0].PostalAddress.GeoLocation.GeographicCoordinates.Latitude);
    })

  }

  toggleView(){
    this.isExpanded = !this.isExpanded;
  }

}


