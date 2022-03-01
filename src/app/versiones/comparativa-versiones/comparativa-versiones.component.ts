import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparativa-versiones',
  templateUrl: './comparativa-versiones.component.html',
  styleUrls: ['./comparativa-versiones.component.css'],
})
export class ComparativaVersionesComponent implements OnInit {
  selectedOption = 'LITE';
  constructor() {}

  ngOnInit(): void {}

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
