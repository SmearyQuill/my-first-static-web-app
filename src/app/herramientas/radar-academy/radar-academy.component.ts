import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-academy',
  templateUrl: './radar-academy.component.html',
  styleUrls: ['./radar-academy.component.css']
})
export class RadarAcademyComponent implements OnInit {
  heroTitle1 = "CAPACITAMOS A TUS COLABORADORES"
  heroTitle2 = "EN CUESTIÓN DE HORAS"
  btn1Text = "SOLICITAR UN DEMO"
  btn2Text = "CONOCE LA VERSION FULL"
  btn2 = true
  bgImg = '/assets/Grupo 541.png'
  btn1Route = "/contactanos"
  btn2Route = "/versiones"

  infoTitle = "RADAR ACADEMY"
  infoText = "Radar Academy es una plataforma para la capacitación de todos los colaboradores de tu taller de HyP, donde obtendrás una certificación para el uso completo del sistema."
  infoVideo = true
  btnText = "AGENDA UNA REUNIÓN WEB"
  btnRoute = "/contactanos"
  constructor() { }

  ngOnInit(): void {
  }

}
