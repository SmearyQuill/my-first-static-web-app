import { Component, OnInit } from '@angular/core';
import * as testimoniosInformation from '../modelos';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  cardList = testimoniosInformation.ListaTestimonios;
  constructor() {}

  ngOnInit(): void {}
}
