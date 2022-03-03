import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-herramienta',
  templateUrl: './informacion-herramienta.component.html',
  styleUrls: ['./informacion-herramienta.component.css']
})
export class InformacionHerramientaComponent implements OnInit {
  @Input() infoTitle: string = ''
  @Input() infoText: string = ''
  @Input() infoVideo: boolean = false
  @Input() videoLink: string = ''
  @Input() btnText: string = ''
  @Input() btnRoute: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
