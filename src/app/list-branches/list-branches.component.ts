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

  cities = [];
  searchTerms = [];

  isLoading: boolean = true;

  // userinput should be saved to this variable 
  // or the search ts file should have a variable and if it isn't '' then it should be called into this 
  searchTerm: any = [];
  userInput: string;

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
      searchterm: '',
    });
  }

  getDataFromAPI(searchTerm) {
    let userInput =  searchTerm[0].searchterm;
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
        console.log(searchTerm[0].searchterm, record.Name);
        if(userInput == record.Name) {
          console.log("it matches");
        } else {
          console.log("nah");
        }
      })
    })
  }

  onSubmit() {
    this.searchTerm.push(this.formVar.value);
    // take object and insert in searchTerm array 
    this.getDataFromAPI(this.searchTerm);
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }

  // matchCity(record) {
  //   record._cityName = record.Name;
  //   this.cities.push(record._cityName);
  // }
}

  

