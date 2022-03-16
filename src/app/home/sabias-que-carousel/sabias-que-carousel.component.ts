import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sabias-que-carousel',
  templateUrl: './sabias-que-carousel.component.html',
  styleUrls: ['./sabias-que-carousel.component.css']
})
export class SabiasQueCarouselComponent implements OnInit {
  firstCard = {
    specialCaseText : '¿SABÍAS QUE...',
    questionText : 'el 60% de la estadías de un vehículo es en actividades administrativas que nadie te paga?',
    informationText : 'Mide y controla tus tiempos por procesos y así aumenta tu productividad.',
    buttonText : 'AGENDA UNA REUNIÓN WEB',
    imageSrc : '/assets/Grupo 522@2x.png'
  }
  secondCard = {
    specialCaseText : '',
    questionText : '',
    informationText : '',
    buttonText : '',
    imgSrc : ''
  }
  thirdCard = {
    specialCaseText : '',
    questionText : '',
    informationText : '',
    buttonText : '',
    imgSrc : ''
  }
  constructor() { }

  ngOnInit(): void {}
    
  ngAfterViewInit():void {

    $('.show-neighbors').click(function(this: HTMLElement){
      $('.carousel-item', '.show-neighbors').each(function(this: HTMLElement){
        var next = $(this).next();
        if (! next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }).each(function(this: HTMLElement){
        var prev = $(this).prev();
        if (! prev.length) {
          prev = $(this).siblings(':last');
        }
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
      });
    });
  }

}
