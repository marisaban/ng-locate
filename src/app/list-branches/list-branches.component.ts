import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

interface myData {
  data: any,
  brand: any,
  branch: any,
  postaladdress: any;
}

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  records = [];
  branches = [];
  p: number = 1;
  hideme = [];

  isLoading: boolean = true;

  constructor(private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
        this.records = this.assignRecord(record);
      })
    })
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }
}

  

