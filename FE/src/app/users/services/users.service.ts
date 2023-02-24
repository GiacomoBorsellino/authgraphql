import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  private readonly urlRoot: string = `${environment.apiUrl}/${environment.apiVersion}`;
  private readonly letApiRestUrl: string = `${this.urlRoot}/apiTestDb1`;
  private readonly token: any = localStorage.getItem('token');
  private readonly userData: any = localStorage.getItem('user');
  private readonly headers = new HttpHeaders()
    .set('authorization', this.token)
    .set('userData', this.userData);

  // Fa una chiamata ad un Api Rest
  public letApiRestData(): Observable<any> {
    return this.http
      .get<any>(`${this.letApiRestUrl}`, {
        headers: this.headers,
      })
      .pipe(
        catchError((error: any) => {
          return of(error);
        })
      );
  }

  // Richiama tutti gli utenti
  public getColumns(table: string): Observable<any> {
    let GET_COLUMNS = gql`
      query getColumns($input: String) {
        getColumns(input: $input)
      }
    `;

    return this.apollo
      .query({
        query: GET_COLUMNS,
        variables: {
          input: table,
        },
        context: {
          headers: this.headers,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  // Richiama tutti gli utenti
  public getUsers(data: any, indexPoint: number): Observable<any> {
    console.log('Service body: ', data);
    let GET_USER = gql`
      query getUsers($input: Pagination) {
        getUsers(input: $input) {
          data {
            ${data}
          }
          count
          typeDataColumns
        }
      }
    `;

    return this.apollo
      .query({
        query: GET_USER,
        variables: {
          input: {
            indexPoint: indexPoint,
          },
        },
        context: {
          headers: this.headers,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  // Aggiungi utente
  public addUser(data: any): Observable<any> {
    console.log('data', data);

    let ADD_USER = gql`
      mutation addUser($input: UserInput) {
        addUser(input: $input) {
          id
          nome
          cognome
          email
        }
      }
    `;

    return this.apollo
      .mutate({
        mutation: ADD_USER,
        variables: {
          input: {
            email: data.email,
            password: data.password,
          },
        },
        context: {
          headers: this.headers,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  // Aggiorna utente
  public updateUser(data: any): Observable<any> {
    let UPDATE_USER = gql`
      mutation updateUser($input: UserInput) {
        updateUser(input: $input) {
          id
          nome
          cognome
          email
        }
      }
    `;
    return this.apollo
      .mutate({
        mutation: UPDATE_USER,
        variables: {
          input: {
            id: data.id,
            email: data.email,
            password: data.password,
            roles: JSON.stringify(data.roles),
          },
        },
        context: {
          headers: this.headers,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  // Cancella utente
  public deleteUser(objData: any): Observable<any> {
    let DELETE_USER = gql`
      mutation deleteUser($input: UserInput) {
        deleteUser(input: $input) {
          id
          nome
          cognome
          email
        }
      }
    `;

    return this.apollo
      .mutate({
        mutation: DELETE_USER,
        variables: {
          input: {
            id: objData.id,
          },
        },
        context: {
          headers: this.headers,
        },
      })
      .pipe(
        catchError((error: any) => {
          return of({ success: false, description: error });
        })
      );
  }

  // Manipolazione errore
  /*
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Errore Client
      errorMessage = `Codice errore C: ${error.error.message}`;
    } else {
      // Errore Server
      errorMessage = `Codice errore S: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  */
}
