import { Component, OnInit } from '@angular/core';
import * as model from '../modelos';
import { ListaTestimonios } from 'src/app/testimonios/modelos';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  testimonios = ListaTestimonios;
  sabiasQueList = model.SabiasQueCards;
  constructor() {}

  ngOnInit(): void {}
}
