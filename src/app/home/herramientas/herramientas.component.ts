import { Component, OnInit } from '@angular/core';
import { WebpSupportService } from 'src/app/webp-support.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  webpSupport: boolean
  constructor(private webpSupportService : WebpSupportService) {
    this.webpSupport = this.webpSupportService.GetWebpSupport()
  }

  ngOnInit(): void {
  }

}
