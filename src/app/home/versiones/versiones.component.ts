import { Component, OnInit } from '@angular/core';
import { WebpSupportService } from 'src/app/webp-support.service';

@Component({
  selector: 'app-versiones',
  templateUrl: './versiones.component.html',
  styleUrls: ['./versiones.component.css']
})
export class VersionesComponent implements OnInit {
  webpSupport:boolean
  constructor(private webpSupportService : WebpSupportService) {
    this.webpSupport = this.webpSupportService.GetWebpSupport()
   }

  ngOnInit(): void {
  }

}
