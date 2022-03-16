import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-testimonio-card',
  templateUrl: './testimonio-card.component.html',
  styleUrls: ['./testimonio-card.component.css']
})
export class TestimonioCardComponent implements OnInit {

  @Input() cardInformation : any;
  constructor() { }

  ngOnInit(): void {
  }

}
