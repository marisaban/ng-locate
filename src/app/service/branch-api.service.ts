import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

import { Branches } from '../branches';


@Injectable({
  providedIn: 'root'
})
export class BranchAPIService {
  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';
  branches: Branches[] = [];

  constructor(private httpClient: HttpClient) { }
  // getBranches(): Observable<Branches[]> {
  //   return this.httpClient.get<Branches[]>(this.url); 
  // }

  getBranches() {
    return this.httpClient.get(this.url)
      .pipe(map((data: any) => data.result ), 
      catchError(error => { return throwError('Its a Trap!')})
      );
  }
}
