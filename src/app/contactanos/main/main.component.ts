import { Component, OnInit } from '@angular/core';
import { ContactanosServiceService } from '../contactanos-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private service: ContactanosServiceService) {}

  exform: any;
  captchaKey: any;

  ngOnInit(): void {
    this.captchaKey = '6LejDEYfAAAAAO12Zp-iuTvpyRjAdmZ7Yq8TAIvL';
    // Se agregan las validaciones al formulario
    this.exform = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(254),
      ]),
      captcha : new FormControl(null, Validators.required)
    });
  }

  sendInfo() {
    const data = JSON.parse(JSON.stringify(this.exform.getRawValue()));
    this.service.sendMail(data).subscribe((response) => {
      if (response.status == 200) {
        this.exform.reset();
      } else {
        console.log('Salió mal el envio de correo');
      }
    });
  }

  resolved(captchaResponse: string) {
    console.log('Se resolvio: ', captchaResponse);
  }
}
