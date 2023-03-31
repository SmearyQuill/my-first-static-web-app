import { Component, OnInit, HostListener, Host } from '@angular/core';
import { ListaTestimonios } from 'src/app/testimonios/modelos';

@Component({
  selector: 'app-testimonios-carousel',
  templateUrl: './testimonios-carousel.component.html',
  styleUrls: ['./testimonios-carousel.component.css'],
})
export class TestimoniosCarouselComponent implements OnInit {
  testimonios: Array<any> = ListaTestimonios.slice(0, 6);
  NumberOfBlocks: number = 0;
  CardsPerBlock: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.CalculateCarrouselDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.CalculateCarrouselDimensions();
  }

  CalculateCarrouselDimensions() {
    const WindowWidth = window.innerWidth;
    if (WindowWidth < 768) {
      this.CardsPerBlock = 1;
    } else if (WindowWidth < 1200) {
      this.CardsPerBlock = 2;
    } else {
      this.CardsPerBlock = 3;
    }
    this.NumberOfBlocks = Math.ceil(
      this.testimonios.length / this.CardsPerBlock
    );
  }
}
