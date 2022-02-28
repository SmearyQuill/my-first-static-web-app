import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versiones',
  templateUrl: './versiones.component.html',
  styleUrls: ['./versiones.component.css'],
})
export class VersionesComponent implements OnInit {
  testimonyCardList = [
    {
      businessName: 'VOLKSWAGEN Y SEAT POTOSINA',
      location: 'San Luis Potosí',
      personName: 'Marco Espinosa',
      personPosition: 'Volkswagen y seat potosina',
      message:
        '"RADAR me ayuda a hacer mi planeación diaria, me dice donde enfocar mis esfuerzos, desde la carga de trabajo por operario, asignar la nómina, hasta detectar autos con problemas para dar solución oportuna."',
      imageSrc: '/assets/MarcoEspinosa.png',
    },
    {
      businessName: 'VW RAFEDHER',
      location: 'Aguascalientes',
      personName: 'Mauricio Herrera',
      personPosition: 'Director de VW Rafedher, Aguascalientes',
      message: '"Radar es control a tu alcance"',
      imageSrc: '/assets/MauricioHerrera.png',
    },
    {
      businessName: 'CONSULTOR PPG',
      location: 'Programa MVP',
      personName: 'Walter Arcusin',
      personPosition: 'Consultor PPG, programa MVP',
      message:
        '"Una herramienta ágil, intuitiva y completa con la que se puede controlar y medir todo el proceso de un CDR desde la recepción hasta la entrega de los vehículos, asegurando la interacción con los clientes, proveedores y aseguradoras."',
      imageSrc: '/assets/WalterArcusin.png',
    },
  ];
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
