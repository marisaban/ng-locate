import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-branches',
  templateUrl: './search-branches.component.html',
  styleUrls: ['./search-branches.component.css']
})
export class SearchBranchesComponent implements OnInit {

  userName: string = "";
  response: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {}

  search() {
    this.httpClient.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }

}
