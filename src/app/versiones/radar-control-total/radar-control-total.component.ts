import { Component, OnInit } from '@angular/core';
import * as radarModel from '../modelos';
@Component({
  selector: 'app-radar-control-total',
  templateUrl: './radar-control-total.component.html',
  styleUrls: ['./radar-control-total.component.css'],
})
export class RadarControlTotalComponent implements OnInit {
  heroInformation = radarModel.versionesHero;
  informationObject = radarModel.RadarControlTotalInformationObject;
  functionalitiesList = radarModel.RadarTotalFunctionalities;
  processList = radarModel.RadarControlTotalProcessList;
  selectedComparativeColumn = 'TOTAL';
  constructor() {}

  ngOnInit(): void {}
}
