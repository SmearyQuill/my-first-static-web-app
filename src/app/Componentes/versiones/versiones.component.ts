import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versiones',
  templateUrl: './versiones.component.html',
  styleUrls: ['./versiones.component.css'],
})
export class VersionesComponent implements OnInit {
  CardsList = [
    {
      specialCaseText: '¿SABÍAS QUE…',
      questionText:
        'el 60% de la estadías de un vehículo es en actividades administrativas que nadie te paga?',
      informationText:
        'Mide y controla tus tiempos por procesos y así aumenta tu productividad.',
      buttonText: 'AGENDA UNA REUNIÓN WEB',
      imageSrc: '/assets/Grupo522@2x.png',
    },
    {
      specialCaseText: '',
      questionText:
        '¿Estás cansado de que tu esfuerzo no se refleje en tu facturación?',
      informationText:
        'Somos el primer sistema que puede proporcionarte la utilidad bruta desde refacciones hasta materiales, por orden de trabajo.',
      buttonText: 'AGENDA UNA REUNIÓN WEB',
      imageSrc: '/assets/Grupo523@2x.png',
    },
    {
      specialCaseText: '¿SABÍAS QUE…',
      questionText: 'puedes reducir tus omisiones gracias a radar?',
      informationText:
        'Con la toma y edición de fotografías de RADAR puedes disminuir tus omisiones en un 70%',
      buttonText: 'AGENDA UNA REUNIÓN WEB',
      imageSrc: '/assets/Grupo524@2x.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
