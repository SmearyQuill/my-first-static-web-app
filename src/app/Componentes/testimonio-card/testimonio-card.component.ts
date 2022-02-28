import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonio-card',
  templateUrl: './testimonio-card.component.html',
  styleUrls: ['./testimonio-card.component.css'],
})
export class TestimonioCardComponent implements OnInit {
  // Nombre del negocio
  @Input() businessName: string = '';
  // Ubicación del negocio
  @Input() location: string = '';
  // Nombre de la persona que está dando el testimonio
  @Input() personName: string = '';
  // Posición de la persona que está dando el testimonio
  @Input() personPosition: string = '';
  // Mensaje de testimonio
  @Input() message: string = '';
  // Ruta de la imagen
  @Input() imageSrc: string = '';

  constructor() {}

  ngOnInit(): void {}
}
