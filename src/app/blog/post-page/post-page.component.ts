import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostPageComponent implements OnInit, OnDestroy {
  Navbar = document.getElementById('menu-navbar');
  constructor() {}

  ngOnInit(): void {
    if (this.Navbar) {
      console.log('Si funca');
      this.Navbar.classList.remove('menu-navbar-color');
      this.Navbar.classList.add('custom-navbar-color');
    }
  }

  ngOnDestroy(): void {
    if (this.Navbar) {
      this.Navbar.classList.remove('custom-navbar-color');
      this.Navbar.classList.add('menu-navbar-color');
    }
  }
}
