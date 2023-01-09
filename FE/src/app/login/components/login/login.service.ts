import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly urlRoot = `${environment.apiUrl}`;
  private readonly headers = { headers: { 'Content-Type': 'application/json', authorization: "sono_il_token_123" } }

  login(objData: any): Observable<any> {
    let body = { tag: "login", query: `{ login { ${objData} } }` }
    return this.http.post<any>(this.urlRoot, body, this.headers)
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
