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

  table: string = 'utenti';

  checking: boolean = true;

  // UNSUBSCRIBE?

  ngOnInit() {
    this.getColumns(this.table);
    setTimeout(() => {
      this.loadUsers(this.selectedColumns, this.indexPoint);
    }, 500);
  }

  getColumns(table: string) {
    this.loading = true;
    this.UsersService.getColumns(table).subscribe(
      (res) => {
        // Dati
        this.selectedColumns = JSON.parse(res.data.getColumns);
        console.log('Colonne - ok: ', this.selectedColumns);
      },
      (error) => {
        // Response Handler
        console.log('dda', error);
        this.responseEvent.emit('error');
      }
    );
  }

  choiceColumns(check: any, colonnaSelezionata: any) {
    let checked = check.srcElement.checked;
    console.log(checked, colonnaSelezionata);
    this.checking = false;
    if (checked) {
      this.selectedColumns.push(colonnaSelezionata);
      for (let i = 0; i < this.rowsData.length; i++) {
        this.rowsData.shift();
      }
    } else {
      for (let i = 0; i < this.selectedColumns.length; i++) {
        if (this.selectedColumns[i] === colonnaSelezionata) {
          this.selectedColumns.splice(i, 1);
        }
      }
      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }
    }
    this.loadUsers(this.selectedColumns, this.indexPoint);

    console.log(this.selectedColumns);
  }

  loadUsers(data: any, indexPoint: number) {
    this.loading = true;
    console.log('OOO ', data);

    this.UsersService.getUsers(data, indexPoint).subscribe(
      (res) => {
        // Dati
        console.log('Lista: ', res);
        this.users = res.data.getUsers.data;
        this.usersCount = res.data.getUsers.count;
        this.typeDataColumns = JSON.parse(res.data.getUsers.typeDataColumns);
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

      this.loadUsers(this.selectedColumns, this.indexPoint);
    }
  }

  downPage() {
    if (this.indexPoint - 10 > -1) {
      this.indexPoint = this.indexPoint - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.selectedColumns, this.indexPoint);
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
