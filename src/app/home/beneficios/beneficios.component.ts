import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css'],
})
export class BeneficiosComponent implements OnInit {
  listaBeneficios = [
    {
      imagen: 'assets/Grupo491.svg',
      texto: 'AGENDA UNA VIDEO LLAMADA',
    },
    {
      imagen: 'assets/Grupo492.svg',
      texto: 'CONFIGURACIÓN DE TU TALLER',
    },
    {
      imagen: 'assets/Grupo493.svg',
      texto: 'CAPACITACIÓN Y CONSULTORÍA',
    },
    {
      imagen: 'assets/Grupo494.svg',
      texto: 'TOMA EL CONTROL DE TU TALLER',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
