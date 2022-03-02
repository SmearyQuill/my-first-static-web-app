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
  }[] = [
    {
      processNumber: '',
      processName: '',
      processInformation: '',
      processDuration: '',
      imageSrc: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
