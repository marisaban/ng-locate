import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  records = [];
  branches = [];
  hideme = [];

  isLoading: boolean = true;
  isSearching: boolean = false;
  notFound: boolean = false;

  keyword: string;
  filters: any = [];
  filteredRecords: any = [];

  constructor(private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
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

  getMatch(keyword) {
    this.keyword = this.keyword.toUpperCase();
    this.branchAPIService.getData()
    .subscribe(data => {
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(filter => {
        if(filter.Name.includes(this.keyword)) {
         for (let i = 0; i <=5; i++) {
           if (filter.Name[i] == this.keyword[i]) {
              this.filteredRecords.pop();
              this.filteredRecords.push(filter);
           }
          }
        } 
        else {
          this.notFound = !this.notFound;
        }
      })
    })
  }

  search() {
    if(this.keyword == undefined || null) {
      alert('You must type in a value first');
    } else {
      this.isSearching = !this.isSearching;
      this.getMatch(this.keyword);
    }
  }

}

  

