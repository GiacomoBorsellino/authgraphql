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
export class SegnalazioniService {
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

  // Richiama tutte le colonne delle Segnalazioni
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

  // Richiama tutte le Segnalazioni
  public getSegnalazioni(
    data: any,
    indexPoint: number,
    filter: any,
    order: any
  ): Observable<any> {
    // Converti Filtro oggetto in stringa, così da evitare specificazione in Backend
    filter = JSON.stringify(filter);
    order = JSON.stringify(order);

    let GET_SEGNALAZIONI = gql`
      query getSegnalazioni($input: Pagination) {
        getSegnalazioni(input: $input) {
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
        query: GET_SEGNALAZIONI,
        variables: {
          input: {
            indexPoint: indexPoint,
            filter: filter,
            order: order,
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
}
