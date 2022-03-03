import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-connect',
  templateUrl: './radar-connect.component.html',
  styleUrls: ['./radar-connect.component.css']
})
export class RadarConnectComponent implements OnInit {
  heroTitle1 = "LA MEJOR HERRAMIENTA MÓVIL"
  heroTitle2 = "PARA AGILIZAR TU OPERACIÓN"
  btn1Text = "SOLICITAR UN DEMO"
  btn2Text = "CONOCE LA VERSION RADAR CONTROL TOTAL"
  btn2 = true
  bgImg = "/assets/Grupo 724.png"
  btn1Route = "/contactanos"
  btn2Route = "/versiones"

  
  infoTitle = "RADAR CONNECT"
  infoText = "Aplicación nativa de RADAR, donde puedes tomar fotografías de tus procesos y en segundos las tienes en tu sistema listas para usarlas como quieras."
  infoVideo = false
  btnText = "SOLICITAR UN DEMO"
  btnRoute = "/contactanos"

  constructor() { }

  ngOnInit(): void {
  }

}
