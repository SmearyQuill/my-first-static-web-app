import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dropdowns = [false, false]
  toogled : boolean = false;
  constructor(public _router : Router) { 
    this._router.events.subscribe((event: Event) => {
      var navbarBrand = document.getElementsByClassName('navbar-brand')[0]
      var navbarToggler = document.getElementsByClassName('navbar-toggler')[0]
      var navbarCollapse = document.getElementsByClassName('navbar-collapse')[0]
      if (event instanceof NavigationStart) {
        this.dropdowns = [false, false]        
        navbarBrand.classList.remove('show')
        navbarBrand.classList.add('hiden')
        this.toogled = false;
        navbarToggler.classList.add('collapsed')
        navbarToggler.setAttribute('aria-expanded','false')
        navbarCollapse.classList.remove('show')
      }
    });
  }
  toogle(){
    this.toogled = !this.toogled;
  }
  ngOnInit(): void {
    this.checkCurrentPage();
  }
  checkCurrentPage(){
  }
  dropdownClicked(index : string){
    for(var i in this.dropdowns){
      if(i == index){
        this.dropdowns[i] = !this.dropdowns[i]
      }else{
        this.dropdowns[i] = false
      }
    }
    
    console.log(this.dropdowns)
  }
  @HostListener('window:scroll', ['$event']) onScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scrolled');
    } else {
      element.classList.remove('navbar-scrolled');
    }
  }
}

