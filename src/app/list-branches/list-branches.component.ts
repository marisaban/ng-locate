import { Component, OnInit } from '@angular/core';

import { BranchAPIService } from '../service/branch-api.service';

//import { myData } from '../data'

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

  constructor(private branchAPIService: BranchAPIService) { }

  //public isExpanded: boolean;

  ngOnInit() {
    this.branchAPIService.getData()
    .subscribe(data => {
      const branches = data.data[0].Brand[0].Branch;

      branches.forEach(record => {
        this.setGeo(record);
      })
      this.records = data.data[0].Brand[0].Branch
    })
  }

  // setGeocoordinates and then add this to its own service 
  setGeo(record) {
    const geoCoords = record.PostalAddress && record.PostalAddress.GeoLocation && record.PostalAddress.GeoLocation.GeographicCoordinates;
    if (geoCoords) {
      record._geolocation = [geoCoords.Latitude, geoCoords.Longitude];
      console.log(record._geolocation);
    }
  }

  // toggleView(){
  //   this.isExpanded = !this.isExpanded;
  // }

}


