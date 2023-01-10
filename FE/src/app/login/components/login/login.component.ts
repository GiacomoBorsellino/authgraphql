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
  id: number;
  email: string;
  ip_address: string;
  // Errore
  error: boolean = false;
  errorMessage: string = '';

  login() {
    let data = {
      id: this.id,
      email: this.email,
      ip_address: this.ip_address
    }
    console.log(data);
    this.LoginService.login(data).subscribe((res) => {
      if (res.errors) {
        console.log('err', res.errors[0].message)
        this.errorMessage = res.errors[0].message;
        this.error = true;
      } else {
        if (res.data.login === null) {
          console.log('Utente non verificato');
        } else {
          localStorage.setItem('token', res.data.login.token)
          localStorage.setItem('user', res.data.login)
          console.log('Utente verificato: ', res);
        }
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    )
  }

}
