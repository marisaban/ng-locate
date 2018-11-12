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

  constructor(private branchAPIService: BranchAPIService) { }

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branches = data.data[0].Brand[0].Branch;
      branches.forEach(record => {
        this.records = record;
        //console.log('records', record);
    })
  }

  // ngOnInit() {
  //   this.branchAPIService.getData()
  //   .subscribe(data => {
  //     this.records = data;
  //     console.log('records', this.records);
  //   })
  // }

  // ngOnInit() {
  //   this.branchAPIService.getData()
  //   .subscribe(data => {
  //     const branches = data.data[0].Brand[0].Branch;
  //     // branches.forEach(record => {
  //     //   console.log(branches)
  //     // })
  //     // prints out the cities not in order
  //     this.records = data.data[0].Brand[0].Branch
  //     console.log("fasfdsa");
  //   })
  // }

}
