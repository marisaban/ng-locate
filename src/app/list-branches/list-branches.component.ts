import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

import { CityNamePipe } from '../pipe/city-name.pipe';

import { FormBuilder, FormGroup } from '@angular/forms';

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

  // userinput should be saved to this variable 
  // or the search ts file should have a variable and if it isn't '' then it should be called into this 
  searchTerm: any = [];
  userInput: string;
  keyword: string;

  cities: any = [];
  filters: any = [];

  // from input field on component 
  formVar: FormGroup;

  constructor(private branchAPIService: BranchAPIService, public cityNamePipe: CityNamePipe, private fb: FormBuilder) { }

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
        this.records = this.assignRecord(record);
      })
    })

    this.formVar = this.fb.group({
      keyword: '',
    });
  }

  getDataFromAPI(keyword) {
    // convert to array
    this.searchTerm.push(keyword);
    this.userInput = this.searchTerm[0].keyword; 
    console.log("userinput provided is", this.userInput);
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(filter => {
        this.filters = this.getCity(filter);
        // needs to return city names  but doesn't because of the template
       // console.log(this.filters, 'then user input', this.userInput);
        //console.log(this.filters.includes(this.userInput));

        if (this.filters.includes(this.userInput)) {
          console.log('WHERE ARE YOU', this.filters.indexOf(this.userInput));
        }
      })
      keyword = '';
    })
  }

  search() {
    this.keyword = this.formVar.value;
    
    if(this.keyword !== '') {
      this.getDataFromAPI(this.keyword);
    }
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }

  getCity(filter) {
    filter._recordName = filter.Name;
    this.cities.push(filter._recordName);
    return this.cities;
  }
}

  

