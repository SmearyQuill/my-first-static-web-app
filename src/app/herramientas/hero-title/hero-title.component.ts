import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css']
})
export class HeroTitleComponent implements OnInit {
  @Input() title1: string = ''
  @Input() title2: string = ''
  @Input() btn1Text: string = ''
  @Input() btn2: boolean = false
  @Input() btn2Text: string = ''
  @Input() backgroundImage: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
