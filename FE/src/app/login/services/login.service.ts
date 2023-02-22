import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  // Login utente
  login(data: any): Observable<any> {
    console.log(data);

    let LOGIN = gql`
      mutation login($input: UserInput) {
        login(input: $input) {
          id
          nome
          cognome
          username
          email
          idGruppo
          token
        }
      }
    `;

    return this.apollo
      .mutate({
        mutation: LOGIN,
        variables: {
          input: data,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  /*
  login(objData: any): Observable<any> {
    let body = { tag: "login", query: `{ login { ${objData} } }` }
    return this.http.post<any>(this.urlRoot, body, this.headers)
      .pipe(retry(1), catchError(this.handleError));
  }
  */

  // Manipolazione errore
  /*
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
  */
}
