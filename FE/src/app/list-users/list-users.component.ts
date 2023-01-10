import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

  constructor(private UsersService: UsersService) { }

  products: any
  users: any
  error: boolean = false;
  errorMessage: string = '';

  call(objData: any) {
    let data = [];
    data.push(objData)
    this.loadUsers(data)
  }

  uncall(objData: any) {
    this.products = []
    this.UsersService.getUsers(objData).subscribe((res) => {
      if (res.errors) {
        console.log(res.errors[0].extensions.code)
        this.errorMessage = res.errors[0].extensions.code;
        this.error = true;
      } else {
        console.log(res.data.products);

        this.products = res.data.products;
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    ).unsubscribe()
  }

  ngOnInit() {
  }

  loadUsers(oj: any) {
    this.UsersService.getUsers(oj).subscribe((res) => {
      if (res.errors) {
        console.log('err', res.errors[0].message)
        this.errorMessage = res.errors[0].message;
        this.error = true;
      } else {
        console.log(res.data.getUsers);

        // this.products = res.data.products;
        this.users = res.data.getUsers;
      }
    }
      // , (err) => {
      //   console.log('Catch', err);
      // }
    )
  }

}
