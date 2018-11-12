import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

interface myData {
  data: any,
  brand: any,
  branch: any,
  postaladdress: any;
}

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent implements OnInit {
  records = [];
  address = [];

  constructor(private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.branchAPIService.getData()
      .subscribe(data => {
        const branches = data.data[0].Brand[0].Branch;
        branches.forEach(record => {
          this.setAddress(record);
          this.records = this.setAddress(record);
        })
         //this.records = data;
       //console.log(this.records);
      })
  }

  setAddress(record) {
    // removing .PostalAddress
    record._streetAddress = record;
    this.address.push(record._streetAddress);
    this.address.sort();
    return this.address;
  }
}
