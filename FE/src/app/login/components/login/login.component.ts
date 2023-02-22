import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private LoginService: LoginService,
    private toastr: ToastrService
  ) {}

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
      password: this.password,
    };

    this.LoginService.login(data).subscribe(
      (res) => {
        console.log('RES ', res);

        if (res.success !== false) {
          if (res.data.login === null) {
            console.log('Utente non verificato');
            this.errorMessage = 'Utente non verificato';
            this.toastr.error(this.errorMessage, 'Errore');
            this.error = true;
          } else {
            localStorage.setItem('token', res.data.login.token);
            console.log(res.data.login);

            localStorage.setItem('user', JSON.stringify(res.data.login));
            console.log('Utente verificato: ', res);
            this.toastr.success('Login avvenuto con successo', 'Successo');
            setTimeout(() => {
              location.reload();
            }, 1000);
          }
        } else {
          this.toastr.error(this.errorMessage, 'Errore');
        }
      },
      (error: any) => {
        this.errorMessage = error;
        console.log('aaa', this.errorMessage);
        this.toastr.error('Si è verificato un errore', 'Errore');
      }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    );
  }
}
