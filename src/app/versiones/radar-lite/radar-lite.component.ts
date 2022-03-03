import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as radarModel from '../modelos';
@Component({
  selector: 'app-radar-lite',
  templateUrl: './radar-lite.component.html',
  styleUrls: ['./radar-lite.component.css'],
})
export class RadarLiteComponent implements OnInit {
  heroInformation = radarModel.versionesHero;
  informationObject = radarModel.RadarLiteInformationObject;
  processList = radarModel.RadarLiteProcessList;
  selectedComparativeColumn = 'LITE';

  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  public onClick(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
