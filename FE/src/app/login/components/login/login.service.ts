import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private apollo: Apollo) { }

  // Login utente
  login(data: any): Observable<any> {

    let LOGIN = gql`
      mutation login($input: UserInput) {
        login(input: $input) {
          id
          first_name
          last_name
          email
          gender
          ip_address
          roles
          token
        }
      }
    `

    return this.apollo
      .mutate({
        mutation: LOGIN,
        variables: {
          input: data
        }
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  /*
  login(objData: any): Observable<any> {
    let body = { tag: "login", query: `{ login { ${objData} } }` }
    return this.http.post<any>(this.urlRoot, body, this.headers)
      .pipe(retry(1), catchError(this.handleError));
  }
  */

  // Manipolazione errore
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Errore Client
      errorMessage = `Codice errore: ${error.error.message}`;
    } else {
      // Errore Server
      errorMessage = `Codice errore: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
