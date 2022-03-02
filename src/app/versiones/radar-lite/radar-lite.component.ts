import { Component, OnInit } from '@angular/core';
import * as radarModel from '../modelos';
@Component({
  selector: 'app-radar-lite',
  templateUrl: './radar-lite.component.html',
  styleUrls: ['./radar-lite.component.css'],
})
export class RadarLiteComponent implements OnInit {
  informationObject = radarModel.RadarLiteInformationObject;
  processList = radarModel.RadarLiteProcessList;
  selectedComparativeColumn = 'LITE';
  constructor() {}

  ngOnInit(): void {}
}
