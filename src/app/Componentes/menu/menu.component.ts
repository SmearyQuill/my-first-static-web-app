import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    this.checkCurrentPage();
  }

  checkCurrentPage(){
    console.log(this._router.url);
  }
}