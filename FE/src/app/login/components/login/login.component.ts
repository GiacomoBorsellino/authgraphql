import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private LoginService: LoginService) { }

  // Variabili
  email: string;
  password: string;
  error: boolean = false;
  errorMessage: string = '';

  login() {
    console.log(this.email, this.password);

    let objData = [this.email, this.password]
    this.LoginService.login(objData).subscribe((res) => {
      if (res.errors) {
        console.log('err', res.errors[0].message)
        this.errorMessage = res.errors[0].message;
        this.error = true;
      } else {
        console.log(res.data);
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    )
  }

}
