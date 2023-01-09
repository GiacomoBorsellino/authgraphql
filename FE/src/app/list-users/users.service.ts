import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  private readonly urlRoot = `${environment.apiUrl}`;
  private readonly headers = { headers: { 'Content-Type': 'application/json', authorization: "sono_il_token_123" } }
  private readonly token = "sono_il_token_124"


  callUsers(objData: any): Observable<any> {
    let body = { tag: "users", query: `{ users { ${objData} } }` }
    return this.http.post<any>(this.urlRoot, body, this.headers)
      .pipe(retry(1), catchError(this.handleError));
  }

  ADD_USER = gql`
    mutation addUser($input: UserInput) {
      addUser(input: $input) {
        email
        ip_address
      }
    }
  `
  addUser(objData: any): Observable<any> {
    return this.apollo
      .mutate({
        mutation: this.ADD_USER,
        variables: {
          input: {
            email: objData.email,
            ip_address: objData.password
          }
        },
        context: {
          headers: new HttpHeaders().set("Authorization", this.token),
        }
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  // callProducts(): Observable<any> {
  //   let body = { query: `{ products { id name category { id name } } }` }
  //   return this.http.post<any>(this.urlRoot, body, this.headers)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

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
