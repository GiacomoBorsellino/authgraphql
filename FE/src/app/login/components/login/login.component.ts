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
  password: string;
  // Errore
  error: boolean = false;
  errorMessage: string = '';

  login() {
    let data = {
      email: this.email,
      password: this.password
    }

    this.LoginService.login(data).subscribe((res) => {
      if (res.errors) {
        console.log('err', res.errors[0].message)
        this.errorMessage = res.errors[0].message;
        this.error = true;
      } else {
        if (res.data.login === null) {
          console.log('Utente non verificato');
          this.errorMessage = 'Utente non verificato';
          this.error = true;
        } else {
          localStorage.setItem('token', res.data.login.token)
          console.log(res.data.login);

          localStorage.setItem('user', JSON.stringify(res.data.login))
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
