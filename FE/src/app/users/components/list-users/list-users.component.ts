import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  constructor(private UsersService: UsersService) {}

  // Response Handler: Success, Error, Info, Warning
  @Output() responseEvent = new EventEmitter<string>();

  users: any;
  usersCount: number;
  limitPagination: number;
  error: boolean = false;
  errorMessage: string = '';
  columnsData: any = [];
  rowsData: any = [];
  indexPoint: number = 0;
  loading: boolean = true;

  // UNSUBSCRIBE?

  ngOnInit() {
    this.loadUsers(this.indexPoint);
  }

  loadUsers(indexPoint: number) {
    this.loading = true;
    this.UsersService.getUsers(indexPoint).subscribe(
      (res) => {
        // Dati
        console.log('Lista: ', res);
        this.users = res.data.getUsers.data;
        this.usersCount = res.data.getUsers.count;

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

        // Response Handler
        // this.responseEvent.emit('success');
      },
      (error) => {
        // Response Handler
        console.log('dda', error);

        this.responseEvent.emit('error');
      }
    );
  }

  upPage() {
    if (this.indexPoint + 10 < this.limitPagination * 10) {
      this.indexPoint = this.indexPoint + 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.indexPoint);
    }
  }

  downPage() {
    if (this.indexPoint - 10 > -1) {
      this.indexPoint = this.indexPoint - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.indexPoint);
    }
  }

  openFilter(column: any) {
    console.log('Colonna: ', column);
  }
}
