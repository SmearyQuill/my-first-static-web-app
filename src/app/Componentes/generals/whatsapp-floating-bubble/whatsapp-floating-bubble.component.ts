import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'whatsapp-floating-bubble',
  templateUrl: './whatsapp-floating-bubble.component.html',
  styleUrls: ['./whatsapp-floating-bubble.component.css'],
})
export class WhatsappFloatingBubbleComponent implements OnInit {
  PhoneNumber: string = '4441951415';
  Message: string = 'Hola, quiero información detallada sobre RADAR.';

  constructor() {}

  ngOnInit(): void {}

  SendWhatsapp() {
    window.open(
      `http://web.whatsapp.com/send/?phone=521${this.PhoneNumber}&text=${this.Message}`,
      'whatsapp'
    );
  }
}
