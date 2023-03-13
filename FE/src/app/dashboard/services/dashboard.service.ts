import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private apollo: Apollo) {}

  private readonly token: any = localStorage.getItem('token');
  private readonly userData: any = localStorage.getItem('user');
  private readonly headers = new HttpHeaders()
    .set('authorization', this.token)
    .set('userData', this.userData);

  // COUNTERS
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

  public getCountSegnalazioniProntoIntervento(): Observable<any> {
    let GET_SEGNALAZIONI_PRONTO_INTERVENTO = gql`
      query getCountSegnalazioniProntoIntervento {
        getCountSegnalazioniProntoIntervento
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI_PRONTO_INTERVENTO,
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

  public getCountSegnalazioniGetico(): Observable<any> {
    let GET_SEGNALAZIONI_GETICO = gql`
      query getCountSegnalazioniGetico {
        getCountSegnalazioniGetico {
          NC
          DV
          IM
          IN
          sopralluogoEffettuato
          sopralluogoNonEffettuato
          sopralluogoNonRichiesto
        }
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI_GETICO,
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

  // SINOTTICO
  public getCountFonteRichiedenti(): Observable<any> {
    let GET_FONTE_RICHIEDENTI = gql`
      query getCountFonteRichiedenti {
        getCountFonteRichiedenti {
          diretta
          telefonica
          email
          fax
          web
        }
      }
    `;

    return this.apollo
      .query({
        query: GET_FONTE_RICHIEDENTI,
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

  public getSegnalazioniQuartiere(quartiere: string): Observable<any> {
    let GET_FONTE_SEGNALAZIONI_QUARTIERE = gql`
      query getCountSegnalazioniQuartiere($input: String) {
        getCountSegnalazioniQuartiere(input: $input) {
          totaleQuartiere
          giornalieroQuartiere
          prontoInterventoQuartiere
        }
      }
    `;

    return this.apollo
      .query({
        query: GET_FONTE_SEGNALAZIONI_QUARTIERE,
        variables: {
          input: quartiere,
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

  // GETICO
  public getCountStatoGetico(): Observable<any> {
    let GET_SEGNALAZIONI_GETICO = gql`
      query getCountSegnalazioniGetico {
        getCountSegnalazioniGetico
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI_GETICO,
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

  public getLastGetico(): Observable<any> {
    let GET_SEGNALAZIONI_GETICO = gql`
      query getLastGetico {
        getLastGetico
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI_GETICO,
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

  // SEGNALAZIONI TORTE
  public getLastSegnalazioni(): Observable<any> {
    let GET_LAST_SEGNALAZIONI = gql`
      query getLastSegnalazioni {
        getLastSegnalazioni
      }
    `;

    return this.apollo
      .query({
        query: GET_LAST_SEGNALAZIONI,
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

  public getCountSegnalazioniSeveritaTotali(
    start: any,
    end: any
  ): Observable<any> {
    let GET_SEGNALAZIONI = gql`
      query getCountSegnalazioniSeveritaTotali($input: Range) {
        getCountSegnalazioniSeveritaTotali(input: $input) {
          rosso
          giallo
          verde
          bianco
        }
      }
    `;

    return this.apollo
      .query({
        query: GET_SEGNALAZIONI,
        variables: {
          input: {
            start: start,
            end: end,
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
