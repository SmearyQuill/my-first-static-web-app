import { Component, OnInit } from '@angular/core';
import * as TestimoniosInformation from '../modelos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroInformation = TestimoniosInformation.heroInformation;
  constructor() {}

  ngOnInit(): void {}
}
