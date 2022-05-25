import { Component, OnInit } from '@angular/core';
import { WebpSupportService } from './webp-support.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RadarWebPage';
  constructor(private webpSupportService : WebpSupportService){
  }
  ngOnInit(): void {
    this.webpSupportService.SetWebpSupport()
  }
}
