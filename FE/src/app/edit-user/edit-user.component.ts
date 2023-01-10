import { Component } from '@angular/core';
import { UsersService } from '../list-users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent {
  constructor(private UsersService: UsersService) { }

  // Variabili
  id: number;
  email: string;
  password: string;
  error: boolean = false;
  errorMessage: string = '';

  addUser() {
    console.log(this.email, this.password);

    let data = {
      email: this.email,
      password: this.password
    }

    this.UsersService.addUser(data).subscribe(({ res }) => {
      console.log('added data: ', res)
    })

    // Chiamata "Classica"
    // let objData = `
    //   {
    //     "input": {
    //       "email": ${this.email}, 
    //       "ip_address": ${this.password}
    //     }
    //   }
    // `
    // console.log(objData);
    // this.UsersService.addUser(objData).subscribe((res) => {
    //   if (res.errors) {
    //     console.log('err', res.errors[0].message)
    //     this.errorMessage = res.errors[0].message;
    //     this.error = true;
    //   } else {
    //     console.log(res.data.products);

    //     // this.products = res.data.products;
    //     this.user = res.data.users;
    //     console.log(this.user);
    //   }
    // })
  }

  updateUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id,
      email: this.email,
      password: this.password
    }

    this.UsersService.updateUser(data).subscribe(({ res }) => {
      console.log('updated data: ', res)
    })
  }

  deleteUser() {
    console.log(this.email, this.password);

    let data = {
      id: this.id
    }

    this.UsersService.deleteUser(data).subscribe(({ res }) => {
      console.log('deleted data: ', res)
    })
  }
}
