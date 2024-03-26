import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private route: Router  ){}
  home() {
this.route.navigate(["home"])
  };
  about() {
    this.route.navigate(["about"])
  };
  json() {
this.route.navigate(["json"])
  };
  data(){
    this.route.navigate(["data"])
  };
  table(){
    this.route.navigate(["table"])
  };
  book(){
    this.route.navigate(["book"])
  };
  row(){
    this.route.navigate(["row"])
  };
parent(){
  this.route.navigate(["parent"])
};
child(){
  this.route.navigate(["child"])
};
cal(){
  this.route.navigate(["cal"])
};
register(){
  this.route.navigate(["register"])
};
login(){
  this.route.navigate(["login"])
};
star(){
  this.route.navigate(['star'])
}
forms(){
  this.route.navigate(["forms"])
}
}
