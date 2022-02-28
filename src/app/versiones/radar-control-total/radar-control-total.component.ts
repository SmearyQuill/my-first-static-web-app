import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-control-total',
  templateUrl: './radar-control-total.component.html',
  styleUrls: ['./radar-control-total.component.css'],
})
export class RadarControlTotalComponent implements OnInit {
  informationObject = {
    informationText:
      'Es la opción perfecta para talleres de bajo volumen con personal administrativo limitado, ya que no sobrecarga de actividades dentro del sistema a los pocos usuarios que operan en el taller.',
    informationPoints: [
      'Volumen de rep: +100 Unidades mensuales',
      'Plantilla laboral alta',
      'Funciones especificas',
      'Contabilidad interna',
    ],
    imageSrc: 'assets/RadarControlTotal.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
