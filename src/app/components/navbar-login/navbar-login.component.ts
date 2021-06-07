import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  isLogged = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }


  ngOnInit(): void {

    if(localStorage.getItem('firstName')!=null){
      this.isLogged = true;
      console.log(this.isLogged,'++++')
    }

  }

}
