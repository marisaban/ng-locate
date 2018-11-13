import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, throwError} from 'rxjs';


import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-branches',
  templateUrl: './search-branches.component.html',
  styleUrls: ['./search-branches.component.css'],
  providers: [SearchService]
})
export class SearchBranchesComponent implements OnInit {
  results: Object;
  searchTerm: string  = "initial value";

  constructor(private httpClient: HttpClient) {
    
   }

  ngOnInit() {}

  searchText() {
  }


}
