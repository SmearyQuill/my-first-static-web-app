import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-hero-versiones',
  templateUrl: './hero-versiones.component.html',
  styleUrls: ['./hero-versiones.component.css'],
})
export class HeroVersionesComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() btn1Text: string = '';
  @Input() btn2Text: string = '';
  @Input() backgroundImage: string = '';
  @Input() btn1Route: string = '';
  @Input() btn2Route: string = '';
  @Input() heroIcon : string = '';
  constructor(private viewPortScroller: ViewportScroller) {}
  ngOnInit(): void {}
  
  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
