import { Component, OnInit, Input } from '@angular/core';
import { WebpSupportService } from 'src/app/webp-support.service';

@Component({
  selector: 'app-testimonio-card',
  templateUrl: './testimonio-card.component.html',
  styleUrls: ['./testimonio-card.component.css'],
})
export class TestimonioCardComponent implements OnInit {
  imgFormat: string;
  @Input() cardInformation: any;
  constructor(private webpSupportService: WebpSupportService) {
    this.imgFormat = this.webpSupportService.GetWebpSupport()
      ? '.webp'
      : '.png';
  }

  ngOnInit(): void {}
}
