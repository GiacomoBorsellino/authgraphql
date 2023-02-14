import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  constructor(private http: HttpClient) {}

  private readonly urlRoot = `${environment.apiUrl}/${environment.apiVersion}`;
  private readonly token: any = localStorage.getItem('token');
  private readonly userData: any = localStorage.getItem('user');
  private readonly headers: any = new HttpHeaders()
    .set('Authorization', this.token)
    .set('userData', this.userData);
  private readonly letApiRestUrl: string = `${this.urlRoot}`;

  // Richiama un utente con una chiamata rest
  public letApiRestData(): Observable<any> {
    return this.http
      .get<any>(`${this.letApiRestUrl}/apiTestDb1`, {
        headers: this.headers,
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  // Richiama un item con una chiamata rest da un secondo DB
  public letApiRestDataDb2(): Observable<any> {
    return this.http
      .get<any>(`${this.letApiRestUrl}/apiTestDb2`, {
        headers: this.headers,
      })
      .pipe(retry(1), catchError(this.handleError));
  }

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
