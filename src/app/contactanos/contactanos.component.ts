import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { send } from 'process';
import { ContactanosServiceService } from './contactanos-service.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(private service : ContactanosServiceService) { }

  ngOnInit(): void {
    const test = '{"test":"test"}'
    this.sendDataToApi(JSON.parse(test))
  }
  sendDataToApi(data: JSON){
    this.service.sendMail(data).subscribe((response) => {
      console.log('Response from API is', response)
    }, (error) => {
      console.log('Error is ', error)
    })
  }
}
