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
  };
  constructor() {}

  ngOnInit(): void {
    this.selectFunctionality(0);
  }

  // {
  //   name: 'PANEL DE CLIENTE',
  //   icon: 'assets/Panel-Cliente.png',
  //   gif: 'panel-cliente2.png',
  //   text: 'Mantén a tu cliente informado 24/7 con información en tiempo real.',
  // },
  // Función para seleccionar una funcionalidad
  selectFunctionality(index: number) {
    this.selectedFunctionality = this.list[index];
    console.log('Funcionalidad seleccionada: ', this.selectedFunctionality);
  }
}
