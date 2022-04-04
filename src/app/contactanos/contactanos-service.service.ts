import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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
      .post(environment.apiUrl + 'informacionContacto',data,{observe:'response'})
      .pipe(map((res) => res));
  }
}
