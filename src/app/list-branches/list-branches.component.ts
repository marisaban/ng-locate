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
  isSearching: boolean = false;

  // userinput should be saved to this variable 
  // or the search ts file should have a variable and if it isn't '' then it should be called into this 
  searchTerm: any = [];
  userInput: string;

  // from input field on component 
  formVar: FormGroup;

  createList: any;

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

  getDataFromAPI(searchTerm) {
    let userInput =  searchTerm[0].searchterm;
    this.branchAPIService.getData()
    .subscribe(data => {
      this.isLoading = false;
      const branchObj = data.data[0].Brand[0].Branch;
      branchObj.forEach(record => {
        //console.log(searchTerm[0].searchterm, record.Name);
        // if(userInput == record.Name) {
        //   console.log("it matches");
        // } else {
        //   console.log("nah");
        // }
      })
      userInput = '';
    })
  }

  search() {
    // print out input
   //console.log('search', this.formVar.value);

    this.searchTerm.push(this.formVar.value);


    for (let i = 0; i < this.searchTerm.length; i++) {
      //console.log('your input is', this.searchTerm[i]);
      this.isSearching = true;
      
    }
    
    // if array is not empty then match
    if(this.searchTerm.length >= 1) {
      this.getDataFromAPI(this.searchTerm);
    }
  }

  assignRecord(record) {
    record._recordName = record;
    this.branches.push(record._recordName);
    return this.branches;
  }
}

  

