import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-consulting',
  templateUrl: './radar-consulting.component.html',
  styleUrls: ['./radar-consulting.component.css']
})
export class RadarConsultingComponent implements OnInit {
  heroTitle1 = "MÁS QUE UN SOFTWARE,"
  heroTitle2 = "SOMO UNA METODOLOGÍA DEL TRABAJO"
  btn1Text = "SOLICITAR UN DEMO"
  btn2Text = "CONOCE LA VERSION RADAR CONTROL TOTAL"
  btn2 = true
  bgImg = "/assets/campaign-creators-pypeCEaJeZY-unsplash.png"
  btn1Route = "/contactanos"
  btn2Route = "/versiones"

  infoTitle = "RADAR CONSULTING"
  infoText = "Te damos 12 semanas de consultoría para asegurarnos de que se están obteniendo los resultados proyectados , enfocándonos en la productividad de tu taller o de lo contrario te regresamos tu dinero."
  infoVideo = false
  btnText = "QUIERO AGENDAR UNA DEMO"
  btnRoute = "/contactanos"
  constructor() { }

  ngOnInit(): void {
  }

}
