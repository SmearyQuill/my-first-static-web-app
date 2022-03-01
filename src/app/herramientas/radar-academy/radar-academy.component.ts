import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-academy',
  templateUrl: './radar-academy.component.html',
  styleUrls: ['./radar-academy.component.css']
})
export class RadarAcademyComponent implements OnInit {
  infoTitle = "RADAR ACADEMY";
  infoText = "Radar Academy es una plataforma para la capacitación de todos los colaboradores de tu taller de HyP, donde obtendrás una certificación para el uso completo del sistema.";
  infoVideo = true;
  constructor() { }

  ngOnInit(): void {
  }

}
