import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css'],
})
export class MarcasComponent implements OnInit {
  listaImagenes = [
    'assets/Grupo526.svg',
    'assets/Grupo527.svg',
    'assets/Grupo528.svg',
    'assets/Grupo532.svg',
    'assets/Grupo529.svg',
    'assets/Grupo531.svg',
    'assets/Grupo 1.svg',
    'assets/Grupo 2.svg',
    'assets/Grupo 3.svg',
  ];

  listaImagenes2 = [
    'assets/Grupo526.svg',
    'assets/Grupo527.svg',
    'assets/Grupo528.svg',
    'assets/Grupo532.svg',
    'assets/Grupo529.svg',
    'assets/Grupo531.svg',
    'assets/Grupo 1.svg',
    'assets/Grupo 2.svg',
    'assets/Grupo 3.svg',
  ]
  constructor() {}

  ngOnInit(): void {}
}
