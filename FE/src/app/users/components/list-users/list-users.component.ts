import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

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
  data: any = [];

  call(objData: any) {
    this.data.push(objData)
    this.loadUsers(this.data)
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
    let data = oj
    console.log(oj);

    this.UsersService.getUsers(data).subscribe((res) => {
      console.log('lista data: ', res)
      this.users = res.data.getUsers
    })
  }

}
