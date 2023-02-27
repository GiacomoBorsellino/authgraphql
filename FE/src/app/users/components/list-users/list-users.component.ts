import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { startWith } from 'rxjs';
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

  users: any = [];
  usersCount: number;
  typeDataColumns: any;
  limitPagination: number;
  error: boolean = false;
  errorMessage: string = '';
  columnsData: any = [];
  rowsData: any = [];
  indexPoint: number = 0;
  loading: boolean = true;
  table: string = 'utenti';

  originalPositionedColumns: any = [];
  selectedColumns: any = [];
  columnsModal: boolean = false;

  modalFilterNumeric: boolean = false;
  modalFilterString: boolean = false;
  modalFilterDate: boolean = false;
  modalFilterBoolean: boolean = false;
  modalFilterCategory: boolean = false;

  filter: any = {};

  colonnaInFilter: any = {};

  // UNSUBSCRIBE?

  ngOnInit() {
    this.getColumns(this.table);
  }

  // Return all Columns of Table
  getColumns(table: string) {
    this.loading = true;
    this.UsersService.getColumns(table).subscribe(
      (res) => {
        // Dati
        // Posizione colonne originale
        this.originalPositionedColumns = JSON.parse(res.data.getColumns);

        // Colonne selezionate
        this.selectedColumns = JSON.parse(res.data.getColumns);
        this.loadUsers(this.selectedColumns, this.indexPoint, this.filter);
      },
      (error) => {
        // Response Handler
        console.log('dda', error);
        this.responseEvent.emit('error');
      }
    );
  }

  // Choice Columns
  choiceColumns(check: any, colonnaSelezionata: any) {
    let checked = check.target.checked;
    // console.log(checked, colonnaSelezionata);

    if (checked) {
      this.selectedColumns.push(colonnaSelezionata);
      for (let i = 0; i < 10; i++) {
        this.rowsData.pop();
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
    this.loadUsers(this.selectedColumns, this.indexPoint, this.filter);
  }

  toggleModalModalSelectorColumns() {
    this.columnsModal = !this.columnsModal;
  }

  // Main Call
  loadUsers(data: any, indexPoint: number, filter: object) {
    this.loading = true;

    // Riordino Colonne a struttura originale
    data = this.originalPositionedColumns
      .filter((item: any) => data.includes(item))
      .map((item: any) => item);

    // console.log('Body riordinato: ', this.originalPositionedColumns, data);

    this.UsersService.getUsers(data, indexPoint, filter).subscribe(
      (res) => {
        // Dati
        this.users = res.data.getUsers.data;
        this.usersCount = res.data.getUsers.count;
        this.typeDataColumns = JSON.parse(res.data.getUsers.typeDataColumns);
        this.limitPagination = Math.ceil(this.usersCount / 10);
        console.log('Lista: ', this.users);

        // Colonne
        this.columnsData = Object.keys(this.users[0]);
        console.log('Colonne: ', this.columnsData, this.columnsData.length);

        // Righe
        this.rowsData = []; // Pulizia righe post filtro
        this.users.map((row: any) => {
          this.rowsData.push(Object.values(row));
        });
        console.log('Righe: ', this.users);

        this.loading = false;
        // this.colonnaInFilter = ''; // Ricorda, il reset va alla fine dell'operazione
      },
      (error) => {
        // Response Handler
        console.log('Errorone: ', error);
        this.responseEvent.emit('error');
        // this.colonnaInFilter = ''; // Ricorda, il reset va alla fine dell'operazione
      }
    );
  }

  // Pagination
  upPage() {
    if (this.indexPoint + 10 < this.limitPagination * 10) {
      this.indexPoint = this.indexPoint + 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.selectedColumns, this.indexPoint, this.filter);
    }
  }

  downPage() {
    if (this.indexPoint - 10 > -1) {
      this.indexPoint = this.indexPoint - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadUsers(this.selectedColumns, this.indexPoint, this.filter);
    }
  }

  // Filtering
  // SWITCH FILTERS
  switchFilter(column: any) {
    this.colonnaInFilter = column;
    console.log(this.colonnaInFilter);

    let typeOfColumn: string;
    this.typeDataColumns.map((colonna: any) => {
      if (colonna.nameColumn === column) {
        typeOfColumn = colonna.typeData;
        if (typeOfColumn === 'integer') {
          this.toggleModalFilterNumeric();
        } else if (
          (typeOfColumn === 'character varying' && !column.includes('data')) ||
          (typeOfColumn === 'text' && !column.includes('data'))
        ) {
          this.toggleModalFilterString();
        } else if (column.includes('data')) {
          this.toggleModalFilterDate();
        } else if (typeOfColumn === 'boolean') {
          this.toggleModalFilterBoolean();
        } else if (column === 'vedi lista collegamento') {
          this.toggleModalFilterCategory();
        }
      }
    });
    console.log(this.filter);
  }

  // OPEN/CLOSE FILTERS
  toggleModalFilterNumeric() {
    console.log('Filtro Numerico');
    this.modalFilterNumeric = !this.modalFilterNumeric;
    if (this.modalFilterNumeric === true) {
      console.log(this.filter);
    }
  }

  toggleModalFilterString() {
    console.log('Filtro a Stringa');
    this.modalFilterString = !this.modalFilterString;
    if (this.modalFilterString === true) {
      console.log(this.filter);
    }
  }

  toggleModalFilterDate() {
    console.log('Filtro a Data');
    this.modalFilterDate = !this.modalFilterDate;
    if (this.modalFilterDate === true) {
      console.log(this.filter);
    }
  }

  toggleModalFilterCategory() {
    console.log('Filtro a Lista');
    this.modalFilterCategory = !this.modalFilterCategory;
    if (this.modalFilterCategory === true) {
      console.log(this.filter);
    }
  }

  toggleModalFilterBoolean() {
    console.log('Filtro a Booleano');
    this.modalFilterBoolean = !this.modalFilterBoolean;
    if (this.modalFilterBoolean === true) {
      console.log(this.filter);
    }
  }

  filterNumeric(value: number) {}

  filterString(value: string) {
    let nomeColonna: any = {};
    nomeColonna.contains = value;
    nomeColonna.mode = 'insensitive';
    this.filter;
    this.filter[this.colonnaInFilter] = nomeColonna;

    console.log(this.filter);
    this.loadUsers(this.selectedColumns, this.indexPoint, this.filter);
  }
}
