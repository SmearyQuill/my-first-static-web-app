import { Component, OnInit } from '@angular/core';
import { ContactanosServiceService } from '../contactanos-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      lastname: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
        Validators.maxLength(15)
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(254),
      ]),
      captcha: new FormControl(null, Validators.required),
    });
  }

  sendInfo() {
    const data = JSON.parse(JSON.stringify(this.exform.getRawValue()));
    Swal.fire({
      title: 'Enviando información.',
      didOpen: () => { Swal.showLoading() }
    })

    this.service.sendMail(data).subscribe((response) => {
      if (response.body.success == true) {
        this.exform.reset();
        Swal.fire({
          title: 'Información enviada',
          text: 'Su información fue enviada correctamente. El departamento de ventas pronto se comunicará con usted.',
          icon: 'success',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Algo salió mal al enviar su información de contacto, intentelo de nuevo más tarde',
        });
      }
    });
  }

  resolved(captchaResponse: string) {}
}
