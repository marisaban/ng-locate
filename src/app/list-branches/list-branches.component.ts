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

  isLoading: boolean = true;

  // userinput should be saved to this variable 
  keyword: string;

  filters: any = [];

  // for testing
  cities: any = [];

  constructor(private branchAPIService: BranchAPIService, 
              private fb: FormBuilder) { }

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
         this.records = this.assignRecord(record);
       // this.filteredRecords = this.getCity(record);
      })
    })
  }

  // to match the user input with the city name (will remove after testing)
  getDataFromAPI(keyword) {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(filter => {
        // returns cities
        this.filters = this.getCity(filter);
        // stops working when filter calls service
        if (this.filters.includes(this.keyword)) {
          console.log('WHERE ARE YOU', this.filters.indexOf(this.keyword));
        }
      })
    })
  }

  search() {
    if(this.keyword !== '') {
      this.getDataFromAPI(this.keyword);
    }
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }

  // remove after testing
  getCity(filter) {
    filter._recordName = filter.Name;
    this.cities.push(filter._recordName);
    return this.cities;
  }
}

  

