import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor() { }

  email: string;
  password: string;

  login() {
    console.log(this.email, this.password);
  }

}
