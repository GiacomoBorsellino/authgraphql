import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  constructor(private UsersService: UsersService) {}

  users: any;
  usersCount: number;
  limitPagination: number;
  error: boolean = false;
  errorMessage: string = '';
  columnsData: any = [];
  rowsData: any = [];
  start: number = 0;
  end: number = 10;
  loading: boolean = true;

  // UNSUBSCRIBE?

  ngOnInit() {
    this.loadUsers(this.start, this.end);
  }

  loadUsers(start: number, end: number) {
    this.loading = true;
    this.UsersService.getUsers(start, end).subscribe((res) => {
      // Dati
      console.log('Lista: ', res);
      this.users = res.data.getUsers.utentiList;
      this.usersCount = res.data.getUsers.utentiCount;

      this.limitPagination = Math.ceil(this.usersCount / 10);

      // Colonne
      this.columnsData = Object.keys(this.users[0]);
      console.log('Colonne: ', this.columnsData, this.columnsData.length);

      // Righe
      this.users.map((row: any) => {
        this.rowsData.push(Object.values(row));
      });
      console.log('Righe: ', this.rowsData);
      this.loading = false;
    });
  }

  upPage() {
    if (this.start + 10 < this.limitPagination * 10) {
      this.start = this.start + 10;
      this.end = this.start + 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.start, this.end);
    }
  }

  downPage() {
    if (this.start - 10 > -1) {
      this.start = this.start - 10;
      this.end = this.start - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.start, this.end);
    }
  }
}
