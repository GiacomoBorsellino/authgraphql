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
export class DashboardService {
  constructor(private apollo: Apollo, private http: HttpClient) {}

  private readonly token: any = localStorage.getItem('token');
  private readonly userData: any = localStorage.getItem('user');
  private readonly headers = new HttpHeaders()
    .set('authorization', this.token)
    .set('userData', this.userData);

  public getCountSegnaleticaTemporaneaAttiva(): Observable<any> {
    let GET_SEGNALETICATEMPORANEAATTIVA = gql`
      query getCountSegnaleticaTemporanea {
        getCountSegnaleticaTemporanea
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALETICATEMPORANEAATTIVA,
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

  public getProntoIntervento(): Observable<any> {
    let GET_PRONTO_INTEVENTO = gql`
      query getProntoIntervento {
        getProntoIntervento
      }
    `;

    return this.apollo
      .query({
        query: GET_PRONTO_INTEVENTO,
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

  public getCountSegnalazioni(): Observable<any> {
    let GET_SEGNALAZIONI = gql`
      query getCountSegnalazioni {
        getCountSegnalazioni
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI,
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
