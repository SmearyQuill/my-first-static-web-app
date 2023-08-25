import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ContactanosServiceService {
  private http: HttpClient;
  constructor(private _http: HttpClient) {
    this.http = _http;
  }

  sendMail(data: JSON): Observable<any> {
    return this._http
      .post('https://azure-function-test20230824205648.azurewebsites.net/api/send-mail?',{observe:'response'})
      .pipe(map((res) => res));
  }
  sendMail2(data: JSON): Observable<any> {
    return this._http
      .post('/api/send-mail2',{observe:'response'})
      .pipe(map((res) => res));
  }
}
