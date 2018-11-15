import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

// separate into search comoponent afterwards
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  records = [];
// for testing
  filteredRecords: any = [];

  branches = [];
  hideme = [];
  filteredPoots = [];

  isLoading: boolean = true;
  isSearching: boolean = false;

  // userinput should be saved to this variable 
  // or the search ts file should have a variable and if it isn't '' then it should be called into this 
  keyword: string;

  filters: any = [];

  // for testing
  cities: any = [];

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

  // to match the user input with the city name (will remove after testing)
  getDataFromAPI(keyword) {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(filter => {

        if(filter.Name == this.keyword){
          console.log(this.filteredRecords.push(filter.Name));
        }

      })
    })
  }

  search() {
    this.isSearching = !this.isSearching;
    if(this.keyword !== '') {
      this.getDataFromAPI(this.keyword);
    }
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }

}

  

