import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchAPIService {
  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';

  constructor(private httpClient: HttpClient) { }

  // add error handler
    getData() {
      return this.httpClient.get<any>(this.url);
    }
}