import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  private readonly urlRoot = `${environment.apiUrl}/${environment.apiVersion}`;
  private readonly token: any = localStorage.getItem('token');
  private readonly userData: any = localStorage.getItem('user');
  private readonly headers = new HttpHeaders().set("Authorization", this.token).set("userData", this.userData)
  private readonly letApiRestUrl: string = `${this.urlRoot}/apiTest`;

  // Richiama tutti gli utenti
  public letApiRestData(): Observable<any> {
    return this.http.get<any>(
      `${this.letApiRestUrl}`
    ).pipe(retry(1), catchError(this.handleError));;
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
