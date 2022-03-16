import { Component, OnInit } from '@angular/core';
import * as model from '../modelos';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  sabiasQueList = model.SabiasQueCards;
  constructor() {}

  ngOnInit(): void {}
}
