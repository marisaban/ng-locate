import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchAPIService {
  private endpoint: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';

  constructor(private httpClient: HttpClient) { }
  // assign to getBranchList() when created and return http.get(endpoint);
}
