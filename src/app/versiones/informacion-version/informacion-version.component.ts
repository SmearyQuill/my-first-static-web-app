import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-version',
  templateUrl: './informacion-version.component.html',
  styleUrls: ['./informacion-version.component.css'],
})
export class InformacionVersionComponent implements OnInit {
  @Input() informationText: string = '';
  @Input() informationPoints: string[] = [];
  @Input() imageSrc: string = '';
  constructor() {}

  ngOnInit(): void {}
}
