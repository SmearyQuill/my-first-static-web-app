import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() title1: string = '';
  @Input() title2: string = '';
  @Input() btn1Text: string = '';
  @Input() btn2Text: string = '';
  @Input() backgroundImage: string = '';
  @Input() btn1Route: string = '';
  @Input() btn2Route: string = '';
  @Input() heroIcon : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
