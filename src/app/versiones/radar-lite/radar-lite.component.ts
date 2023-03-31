import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as radarModel from '../modelos';
@Component({
  selector: 'app-radar-lite',
  templateUrl: './radar-lite.component.html',
  styleUrls: ['./radar-lite.component.css'],
})
export class RadarLiteComponent implements OnInit {
  heroInformation = radarModel.HeroLite;
  informationObject = radarModel.RadarLiteInformationObject;
  functionalitiesList = radarModel.RadarLiteFunctionalities;
  processList = radarModel.RadarLiteProcessList;

  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
