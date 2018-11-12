import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  faCoffee = faCoffee;
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
          //console.log(this.records);
        })
         //this.records = data;
       //console.log(this.records);
      })
  }

  // get Address record.PostalAddress.AddressLine
  setAddress(record) {
    record._streetAddress = record.PostalAddress;
    this.address.push(record._streetAddress);
    this.address.sort();
    //console.log(record._streetAddress);
    return this.address;
  }

}
