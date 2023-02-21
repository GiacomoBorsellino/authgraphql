import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private UsersService: UsersService,
    private toastr: ToastrService
  ) {}

  // Response Handler: Success, Error, Info, Warning
  @Output() responseEvent = new EventEmitter<string>();

  // Variabili
  id: number;
  email: string;
  password: string;

  error: boolean = false;
  errorMessage: string = '';

  ngOnInit() {
    // Chiamata API REST normale
    this.UsersService.letApiRestData().subscribe(
      (res) => {
        if (res) {
          console.log('Response: ', res);
          // Response Handler
          // this.responseEvent.emit('success');
        } else {
          console.log('Err in comp ');
          // Response Handler
          // this.responseEvent.emit('error');
        }
      },
      (error) => {
        console.log('Err in comp ', error);
        // Response Handler
        // this.responseEvent.emit('error');
      }
    );

    // Controllo Permessi di Visualizzazione
    let user: any = JSON.parse(localStorage.getItem('user') || '{}');
  }

  addUser() {
    let data = {
      email: this.email,
      password: this.password,
    };

    this.UsersService.addUser(data).subscribe(
      (res) => {
        console.log('RES: ', res);

        if (res.success !== false) {
          console.log('added data: ', res);
          // Response Handler
          this.toastr.success('Operazione avvenuta con successo', 'Successo');
          // this.responseEvent.emit('success');
        } else {
          console.log('aaa', this.errorMessage);
          // Response Handler
          this.toastr.error('Si è verificato un errore', 'Errore');
          // this.responseEvent.emit('error');
        }
      },
      (error: any) => {
        this.errorMessage = error;
        this.responseEvent.emit('error');
        console.log('aaa', this.errorMessage);
      }
    );
  }

  updateUser() {
    let data = {
      id: this.id,
      email: this.email,
      password: this.password,
    };

    this.UsersService.updateUser(data).subscribe(
      (res) => {
        if (res) {
          console.log('updated data: ', res);
          // Response Handler
          this.responseEvent.emit('success');
        } else {
          // Response Handler
          this.responseEvent.emit('error');
        }
      },
      (error) => {
        // Response Handler
        this.responseEvent.emit('error');
      }
    );
  }

  deleteUser() {
    let data = {
      id: this.id,
    };

    this.UsersService.deleteUser(data).subscribe(
      (res) => {
        if (res) {
          console.log('deleted data: ', res);
          // Response Handler
          this.responseEvent.emit('success');
        } else {
          // Response Handler
          this.responseEvent.emit('error');
        }
      },
      (error) => {
        // Response Handler
        this.responseEvent.emit('error');
      }
    );
  }
}
