import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

//import { myData } from '../data'

interface myData {
  data: Object,
  brand: Object,
  branch: Object
}

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css'],
  providers: [BranchAPIService]
})
export class ListBranchesComponent implements OnInit {

  records = [];

  constructor(private branchAPIService: BranchAPIService) { }

  //public isExpanded: boolean;

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      this.records = data.data[0].Brand[0].Branch
    })
  }

  // toggleView(){
  //   this.isExpanded = !this.isExpanded;
  // }

}


