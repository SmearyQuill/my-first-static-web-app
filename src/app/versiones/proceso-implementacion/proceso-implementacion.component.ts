import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-proceso-implementacion',
  templateUrl: './proceso-implementacion.component.html',
  styleUrls: ['./proceso-implementacion.component.css'],
  animations: [
    // Animación cuando se muestra el div con la información.
    trigger('showDetail', [
      transition(':enter', [
        style({ width: '100%', height: '0%', bottom: 0, left: 0 }),
        animate(
          '300ms ease-in-out',
          keyframes([
            style({
              width: '100%',
              height: '0%',
              visibility: 'hidden',
              offset: 0,
            }),
            style({
              width: '100%',
              height: '20%',
              display: 'flex',
              visibility: 'hidden',
              offset: 0.2,
            }),
            style({
              width: '100%',
              height: '40%',
              display: 'flex',
              visibility: 'hidden',
              offset: 0.4,
            }),
            style({
              width: '100%',
              height: '60%',
              display: 'flex',
              visibility: 'hidden',
              offset: 0.6,
            }),
            style({
              width: '100%',
              height: '80%',
              display: 'flex',
              visibility: 'visible',
              offset: 0.8,
            }),
            style({
              width: '100%',
              height: '100%',
              display: 'flex',
              visibility: 'visible',
              offset: 1,
            }),
          ])
          // style({ width: '100%', height: '100%', bottom: 0, left: 0 })
        ),
      ]),
      transition(':leave', []),
    ]),
    trigger('showNumber', [
      transition(':enter', [
        style({
          width: '100%',
          top: 0,
        }),
        animate(
          '300ms ease-in-out',
          style({
            width: '100%',
            height: '100%',
            transform: 'translateY: 100%',
            bottom: 0,
          })
        ),
      ]),
      transition(':leave', []),
    ]),
  ],
})
export class ProcesoImplementacionComponent implements OnInit {
  @Input() processList: {
    processNumber: string;
    processName: string;
    processInformation: string;
    processDuration: string;
    imageSrc: string;
    optional: boolean;
    clicked: boolean;
  }[] = [
    {
      processNumber: '',
      processName: '',
      processInformation: '',
      processDuration: '',
      imageSrc: '',
      optional: false,
      clicked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeView(i: number) {
    this.processList[i].clicked == true
      ? (this.processList[i].clicked = false)
      : (this.processList[i].clicked = true);
  }
}
