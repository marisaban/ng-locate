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
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
        this.records = this.assignRecord(record);
      })
    })
  }

  getMatch(keyword) {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(filter => {
        if(filter.Name == this.keyword){
          this.filteredRecords.push(filter);
          this.keyword = '';
        }else {
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

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }

}

  

