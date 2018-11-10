import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// branches class
import { Branches } from './branches';


@Injectable({
  providedIn: 'root'
})
export class BranchAPIService {
  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';

  constructor(private httpClient: HttpClient) { }
  getBranches(): Observable<Branches[]> {
    return this.httpClient.get<Branches[]>(this.url); 
  }
}
