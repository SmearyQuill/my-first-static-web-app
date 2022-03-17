import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proceso-implementacion',
  templateUrl: './proceso-implementacion.component.html',
  styleUrls: ['./proceso-implementacion.component.css'],
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
