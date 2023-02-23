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
  typeDataColumns: any;
  limitPagination: number;
  error: boolean = false;
  errorMessage: string = '';
  columnsData: any = [];
  rowsData: any = [];
  indexPoint: number = 0;
  loading: boolean = true;
  selectedColumns: any = [];
  switchColumned: boolean = false;

  // UNSUBSCRIBE?

  ngOnInit() {
    this.loadUsers(this.indexPoint);
  }

  choiceColumns(check: any, colonnaSelezionata: any) {
    let checked = check.srcElement.checked;
    console.log(checked, colonnaSelezionata);
    if (checked) {
      this.selectedColumns.push(colonnaSelezionata);
    } else {
      for (let i = 0; i < this.selectedColumns.length; i++) {
        if (this.selectedColumns[i] === colonnaSelezionata) {
          this.selectedColumns.splice(i, 1);
        }
      }
    }
    console.log(this.selectedColumns);
  }

  postLoadUsers(indexPoint: number) {
    if (this.switchColumned) {
      this.loading = true;
      this.UsersService.getUsers(indexPoint).subscribe(
        (res) => {
          // Dati
          console.log('Lista: ', res);
          this.users = res.data.getUsers.data;
          this.usersCount = res.data.getUsers.count;
          this.typeDataColumns = JSON.parse(res.data.getUsers.typeDataColumns);
          console.log('typeDataColumns: ', this.typeDataColumns);

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
        },
        (error) => {
          // Response Handler
          console.log('dda', error);

          this.responseEvent.emit('error');
        }
      );
    }
  }

  loadUsers(indexPoint: number) {
    this.loading = true;
    this.UsersService.getUsers(indexPoint).subscribe(
      (res) => {
        // Dati
        console.log('Lista: ', res);
        this.users = res.data.getUsers.data;
        this.usersCount = res.data.getUsers.count;
        this.typeDataColumns = JSON.parse(res.data.getUsers.typeDataColumns);
        console.log('typeDataColumns: ', this.typeDataColumns);

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

  switchFilter(column: any) {
    let typeOfColumn: string;

    this.typeDataColumns.map((colonna: any) => {
      if (colonna.nameColumn === column) {
        typeOfColumn = colonna.typeData;
        if (typeOfColumn === 'integer') {
          this.openFilterNumeric();
        } else if (
          (typeOfColumn === 'character varying' && !column.includes('data')) ||
          (typeOfColumn === 'text' && !column.includes('data'))
        ) {
          this.openFilterString();
        } else if (column.includes('data')) {
          this.openFilterDate();
        } else if (typeOfColumn === 'boolean') {
          this.openFilterBoolean();
        } else if (column === 'vedi lista collegamento') {
          this.openFilterList();
        }
      }
    });
  }

  openFilterNumeric() {
    console.log('Filtro Numerico');
  }

  openFilterString() {
    console.log('Filtro a Stringa');
  }

  openFilterDate() {
    console.log('Filtro a Data');
  }

  openFilterList() {
    console.log('Filtro a Lista');
  }

  openFilterBoolean() {
    console.log('Filtro a Booleano');
  }
}
