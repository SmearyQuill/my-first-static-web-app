import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactanosServiceService {

  constructor(private http : HttpClient) { }
  sendMail(data : JSON){
    return this.http.post('/api/send',data)
  }
}
