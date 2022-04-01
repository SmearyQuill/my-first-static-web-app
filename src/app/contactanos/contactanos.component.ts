import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { send } from 'process';
import { ContactanosServiceService } from './contactanos-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(private service : ContactanosServiceService) { }  
  exform: any;
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'lastname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(null, [Validators.required, Validators.pattern("[- +()0-9]+")]),
      'message' : new FormControl(null, [Validators.required, Validators.maxLength(254)])
    })
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

  sendInfo(){
    const data = JSON.parse(JSON.stringify(this.exform.getRawValue()))
    this.sendDataToApi(data)
    this.exform.reset()
  }
}
