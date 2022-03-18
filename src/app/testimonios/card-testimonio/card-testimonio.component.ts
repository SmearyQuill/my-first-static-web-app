import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card-testimonio',
  templateUrl: './card-testimonio.component.html',
  styleUrls: ['./card-testimonio.component.css']
})
export class CardTestimonioComponent implements OnInit {

  @Input() cardInformation : any;
  constructor() { }

  ngOnInit(): void {
  }

}
