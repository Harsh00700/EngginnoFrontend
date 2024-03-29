import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  errorData: {};

constructor(private http: HttpClient) { }

contactForm(form) {
  let formData = {
    data: form
  };

  return this.http.post<any>(environment.apiUrl + 'contacts', formData).pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {

    // A client-side or network error occurred. Handle it accordingly.

    console.error('An error occurred:', error.error.message);
  } else {

    // The backend returned an unsuccessful response code.

    // The response body may contain clues as to what went wrong.

    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }

  // return an observable with a user-facing error message

  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);
}
}
