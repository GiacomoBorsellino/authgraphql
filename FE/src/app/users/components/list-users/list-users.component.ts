import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  constructor(private UsersService: UsersService) {}

  products: any;
  users: any;
  error: boolean = false;
  errorMessage: string = '';
  // data: any = ['nome', 'cognome', 'email'];

  columnsData: any = [];
  rowsData: any = [];

  start: number = 0;
  end: number = 10;

  call() {
    // this.data = ['nome', 'cognome', 'email'];
    this.loadUsers(this.start, this.end);
  }

  // uncall(objData: any) {
  //   this.products = [];
  //   this.UsersService.getUsers(objData, this.start, this.end)
  //     .subscribe(
  //       (res) => {
  //         if (res.errors) {
  //           console.log(res.errors[0].extensions.code);
  //           this.errorMessage = res.errors[0].extensions.code;
  //           this.error = true;
  //         } else {
  //           console.log(res.data.products);

  //           this.products = res.data.products;
  //         }
  //       }
  //       // , (err) => {
  //       //   console.log('Catch', err);
  //       // }
  //     )
  //     .unsubscribe();
  // }

  ngOnInit() {
    this.loadUsers(this.start, this.end);
  }

  loadUsers(start: number, end: number) {
    console.log('range: ', this.start, this.end);

    this.UsersService.getUsers(this.start, this.end).subscribe((res) => {
      console.log('Lista: ', res);
      this.users = res.data.getUsers;

      this.columnsData = Object.keys(this.users[0]);
      this.columnsData.shift();
      console.log('Colonne: ', this.columnsData, this.columnsData.length);

      for (let i = 0; i < this.users.length; i++) {
        this.rowsData.push(Object.values(this.users[i]));
        this.rowsData[i].shift();
      }
      console.log('Righe: ', this.rowsData);
    });
  }

  upPage() {
    this.start = this.start + 10;
    this.end = this.start + 10;

    console.log(this.start, this.end);

    this.loadUsers(this.start, this.end);
  }

  downPage() {}
}
