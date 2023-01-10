import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private apollo: Apollo) { }

  // private readonly headers = { headers: { 'Content-Type': 'application/json', authorization: "sono_il_token_123" } }
  // private readonly urlRoot = `${environment.apiUrl}`;
  private readonly token: any = localStorage.getItem('token')

  // Richiama tutti gli utenti
  getUsers(objData: any): Observable<any> {
    console.log(objData);

    let GET_USER = gql` 
      query getUsers {
        getUsers {
          ${objData}
        }
      }
    `

    return this.apollo
      .query({
        query: GET_USER,
        context: {
          headers: new HttpHeaders().set("Authorization", this.token),
        }
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  /*
    getUsers(objData: any): Observable<any> {
      let body = { tag: "users", query: `{ users { ${objData} } }` }
      return this.http.post<any>(this.urlRoot, body, this.headers)
        .pipe(retry(1), catchError(this.handleError));
    }
  */

  // Aggiungi utente
  addUser(objData: any): Observable<any> {

    let ADD_USER = gql`
    mutation addUser($input: UserInput) {
      addUser(input: $input) {
        email
        ip_address
      }
    }
  `

    return this.apollo
      .mutate({
        mutation: ADD_USER,
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

  // Aggiorna utente
  updateUser(objData: any): Observable<any> {
    let UPDATE_USER = gql`
      mutation updateUser($input: UserInput) {
        updateUser(input: $input) {
          email
          ip_address
        }
      }
    `
    return this.apollo
      .mutate({
        mutation: UPDATE_USER,
        variables: {
          input: {
            id: objData.id,
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

  // Cancella utente
  deleteUser(objData: any): Observable<any> {
    let DELETE_USER = gql`
      mutation deleteUser($input: UserInput) {
        deleteUser(input: $input) {
          email
          ip_address
        }
      }
    `

    return this.apollo
      .mutate({
        mutation: DELETE_USER,
        variables: {
          input: {
            id: objData.id
          }
        },
        context: {
          headers: new HttpHeaders().set("Authorization", this.token),
        }
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  /*  
  callProducts(): Observable<any> {
    let body = { query: `{ products { id name category { id name } } }` }
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
