import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchAPIService {
  private url: string = 'https://api.halifax.co.uk/open-banking/v2.2/branches';

  constructor(private httpClient: HttpClient) { }

    getData() {
      return this.httpClient.get<any>(this.url)
        .pipe(catchError(this.handleError))
    }

    private handleError(errorResponse: HttpErrorResponse) {
      if(errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error', errorResponse.error.message);
      } else {
        console.error('Server Side Error', errorResponse);
      }

      return throwError('There is a problem with the service.');
    }
}