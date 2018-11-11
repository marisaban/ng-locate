import { Component } from '@angular/core';

@Component({
  selector: 'app-view-branch-map',
  templateUrl: './view-branch-map.component.html',
  styleUrls: ['./view-branch-map.component.css']
})
export class ViewBranchMapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

}
