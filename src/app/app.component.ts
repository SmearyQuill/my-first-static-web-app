import { Component, OnInit, HostListener, Host } from '@angular/core';
import { WebpSupportService } from './webp-support.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RadarWebPage';
  constructor(private webpSupportService: WebpSupportService) {}
  ngOnInit(): void {
    this.webpSupportService.SetWebpSupport();
  }

  @HostListener('window:load', ['$event'])
  onLoad() {
    let scale = 1 / (window.devicePixelRatio || 1);
    let content = 'width=device-width, initial-scale=' + scale;
    let selector = document.querySelector('meta[name="viewport"]');
    if (selector) {
      selector.setAttribute('content', content);
    }
  }
}
