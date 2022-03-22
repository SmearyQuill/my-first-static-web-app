import { Component, OnInit, Input } from '@angular/core';
import * as radarModel from '../modelos';
@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.css'],
})
export class FuncionalidadesComponent implements OnInit {
  @Input() list: any;

  selectedFunctionality = {
    name: '',
    icon: '',
    gif: '',
    text: '',
    id: 0,
    hover: false,
    iconoActivo : ''
  };
  constructor() {}

  ngOnInit(): void {
    this.selectFunctionality(0);
  }

  // Función para seleccionar una funcionalidad
  selectFunctionality(index: number) {
    this.selectedFunctionality.hover = false;
    this.selectedFunctionality = this.list[index];
    this.selectedFunctionality.hover = true;
  }

  goToNextFunctionality() {
    if (this.selectedFunctionality.id == this.list.length) {
      this.selectFunctionality(0);
    } else {
      this.selectFunctionality(this.selectedFunctionality.id);
    }
  }

  goToPreviousFunctionality() {
    if (this.selectedFunctionality.id == 1) {
      this.selectFunctionality(this.list.length - 1);
    } else {
      this.selectFunctionality(this.selectedFunctionality.id - 2);
    }
  }

  checkMouseOut(i: number) {
    if (this.selectedFunctionality.id != this.list[i].id) {
      this.list[i].hover = false;
    }
  }
}
