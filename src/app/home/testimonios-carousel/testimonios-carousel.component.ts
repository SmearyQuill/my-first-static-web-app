import { Component, OnInit } from '@angular/core';
import { ListaTestimonios } from 'src/app/testimonios/modelos';

@Component({
  selector: 'app-testimonios-carousel',
  templateUrl: './testimonios-carousel.component.html',
  styleUrls: ['./testimonios-carousel.component.css']
})
export class TestimoniosCarouselComponent implements OnInit {

  testimonios = ListaTestimonios;
  constructor() { }

  ngOnInit(): void {
  }

}
