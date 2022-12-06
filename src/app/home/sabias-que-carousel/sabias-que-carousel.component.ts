import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WebpSupportService } from 'src/app/webp-support.service';
import * as model from '../modelos';
declare var $: any;
@Component({
  selector: 'app-sabias-que-carousel',
  templateUrl: './sabias-que-carousel.component.html',
  styleUrls: ['./sabias-que-carousel.component.css']
})
export class SabiasQueCarouselComponent implements OnInit {
  sabiasQueList = model.SabiasQueCards;
  imgFormat: string
  constructor(
    private webpServiceSupport: WebpSupportService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.imgFormat = this.webpServiceSupport.GetWebpSupport() ? '.webp' : '.png'
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      $('.carousel-item', '.show-neighbors').each(function (this: any) {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }).each(function (this: any) {
        var prev = $(this).prev();
        if (!prev.length) {
          prev = $(this).siblings(':last');
        }
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
      });
    }
  }

}
