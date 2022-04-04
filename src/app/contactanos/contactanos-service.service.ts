import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactanosServiceService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = environment.apiUrl;
  }

  sendMail(data: JSON): Observable<any> {
    return this._http
      .post(this.url + 'informacionContacto', data, { observe: 'response' })
      .pipe(map((res) => res));
  }
}
