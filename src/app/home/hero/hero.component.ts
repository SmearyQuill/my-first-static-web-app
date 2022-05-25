import { Component, OnInit } from '@angular/core';
import { WebpSupportService } from 'src/app/webp-support.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  webpSupport:boolean
  constructor(private webpSupportService : WebpSupportService) {
    this.webpSupport = this.webpSupportService.GetWebpSupport()
  }

  ngOnInit(): void {
  }

}
