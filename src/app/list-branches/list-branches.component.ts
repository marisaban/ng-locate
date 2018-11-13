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
  cities = [];
  p: number = 1;
  hideme = [];

  constructor(private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branches = data.data[0].Brand[0].Branch;
      branches.forEach(record => {
        this.setCity(record);
        this.records = this.setCity(record);
      })
      console.log(data);
    })
  }

  setCity(record) {
    // no longer city  name, change variable name
    record._cityName = record;
    this.cities.push(record._cityName);
    return this.cities;
  }
}

  

