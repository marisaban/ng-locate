import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { BranchAPIService } from '../service/branch-api.service';

interface myData {
  data: Object,
  brand: Object,
  branch: Object
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
      this.records = data.data[0].Brand[0].Branch
      console.log(data.data[0].Brand[0].Branch[0].PostalAddress);
    })
  }

}
