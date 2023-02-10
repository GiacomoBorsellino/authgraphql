import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  constructor(private UsersService: UsersService) { }

  // Variabili
  id: number;
  email: string;
  password: string;

  error: boolean = false;
  errorMessage: string = '';

  ngOnInit() {
    // Chiamata API REST normale
    this.UsersService.letApiRestData().subscribe((res) => {
      console.log('Response: ', res)
    })

    // Controllo Permessi di Visualizzazione
    let user: any = JSON.parse(localStorage.getItem('user') || '{}');
  }


  addUser() {
    console.log(this.email, this.password);

    let data = {
      email: this.email,
      password: this.password
    }

    this.UsersService.addUser(data).subscribe((res) => {
      console.log('added data: ', res)
    })
  }

  updateUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id,
      email: this.email,
      password: this.password
    }

    this.UsersService.updateUser(data).subscribe((res) => {
      console.log('updated data: ', res)
    })
  }

  deleteUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id
    }

    this.UsersService.deleteUser(data).subscribe((res) => {
      console.log('deleted data: ', res)
    })
  }
}
