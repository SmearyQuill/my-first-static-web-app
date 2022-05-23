import { Component, OnInit, Input } from '@angular/core';
var modernizer = require('modernizr');
@Component({
  selector: 'app-sabias-que-card',
  templateUrl: './sabias-que-card.component.html',
  styleUrls: ['./sabias-que-card.component.css'],
})
export class SabiasQueCardComponent implements OnInit {
  // Texto que se remarca en la pregunta
  @Input() specialCaseText: string = '';
  // Texto con la pregunta
  @Input() questionText: string = '';
  // Texto de la información del card
  @Input() informationText: string = '';
  // Texto del boton
  @Input() buttonText: string = '';
  // Cadena con la ubicación de la imagen
  @Input() imageSrc: string = '';
  constructor() {}

  ngOnInit(): void {}
}
