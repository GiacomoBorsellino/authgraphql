import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SegnalazioniService } from '../../services/segnalazioni.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-segnalazioni',
  templateUrl: './list-segnalazioni.component.html',
  styleUrls: ['./list-segnalazioni.component.css'],
})
export class ListSegnalazioniComponent {
  constructor(
    private SegnalazioniService: SegnalazioniService,
    private toastr: ToastrService
  ) {}

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
  table: string = 'segnalazione';

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
  selectedColumn: string;
  optionNumericFilter: string = '';

  // UNSUBSCRIBE?

  ngOnInit() {
    this.getColumns(this.table);
  }

  // Return all Columns of Table
  getColumns(table: string) {
    this.loading = true;
    this.SegnalazioniService.getColumns(table).subscribe(
      (res) => {
        // Dati
        // Posizione colonne originale
        this.originalPositionedColumns = JSON.parse(res.data.getColumns);

        // Colonne selezionate
        this.selectedColumns = JSON.parse(res.data.getColumns);
        this.loadSegnalazioni(
          this.selectedColumns,
          this.indexPoint,
          this.filter
        );
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
    this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
  }

  toggleModalModalSelectorColumns() {
    this.columnsModal = !this.columnsModal;
  }

  // Main Call
  loadSegnalazioni(data: any, indexPoint: number, filter: object) {
    this.loading = true;

    // Riordino Colonne a struttura originale
    data = this.originalPositionedColumns
      .filter((item: any) => data.includes(item))
      .map((item: any) => item);

    // console.log('Body riordinato: ', this.originalPositionedColumns, data);

    this.SegnalazioniService.getSegnalazioni(
      data,
      indexPoint,
      filter
    ).subscribe(
      (res) => {
        console.log(res);

        // Dati
        this.users = res.data.getSegnalazioni.data;
        // console.log('bobo ', res.data.getSegnalazioni.data);
        if (this.users.length !== 0) {
          this.usersCount = res.data.getSegnalazioni.count;
          this.typeDataColumns = JSON.parse(
            res.data.getSegnalazioni.typeDataColumns
          );
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
        } else {
          this.columnsData = this.originalPositionedColumns;
          this.rowsData = [];
          this.usersCount = 0;
          this.loading = false;
        }
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

      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    }
  }

  downPage() {
    if (this.indexPoint - 10 > -1) {
      this.indexPoint = this.indexPoint - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    }
  }

  // Clean Filters
  cleanAllFilters() {
    this.filter = {};
    this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
  }

  // Switch/Detect Filters
  switchFilter(column: any) {
    this.colonnaInFilter = column;
    console.log(this.colonnaInFilter);
    this.selectedColumn = column;

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

  // Open/Close Filters
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

  // Filters
  filterNumeric(valoreInput1: number, valoreInput2: number) {
    console.log(this.filter);
    if (this.optionNumericFilter === 'Uguale a') {
      console.log(this.filter);
      this.filter[this.colonnaInFilter] = valoreInput1;
      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    } else if (this.optionNumericFilter === 'Maggiore di') {
      let greaterValue: any = {};
      greaterValue.gt = valoreInput1;
      this.filter[this.colonnaInFilter] = greaterValue;
      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    } else if (this.optionNumericFilter === 'Minore di') {
      let lowerValue: any = {};
      lowerValue.lt = valoreInput1;
      this.filter[this.colonnaInFilter] = lowerValue;
      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    } else if (this.optionNumericFilter === 'Compreso tra') {
      console.log(valoreInput1, valoreInput2);
      if (valoreInput1 < valoreInput2) {
        let lowerValue: any = {};
        let greaterValue: any = {};

        lowerValue.lt = valoreInput1;
        greaterValue.gt = valoreInput2;
        this.filter[this.colonnaInFilter] = {
          gt: valoreInput1,
          lt: valoreInput2,
        };
        this.loadSegnalazioni(
          this.selectedColumns,
          this.indexPoint,
          this.filter
        );
      } else {
        this.toastr.error('Intervallo non valido, ritentare', 'Errore');
      }
    } else if (this.optionNumericFilter === 'Azzera filtro') {
      delete this.filter[this.colonnaInFilter];
      console.log('filt ', this.filter);
      this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
    }
    this.optionNumericFilter === 'Azzera filtro';
  }

  filterString(valoreInput: string) {
    let nomeColonna: any = {};
    nomeColonna.contains = valoreInput;
    nomeColonna.mode = 'insensitive';
    this.filter[this.colonnaInFilter] = nomeColonna;
    this.loadSegnalazioni(this.selectedColumns, this.indexPoint, this.filter);
  }

  changeOptionNumeric(option: any) {
    this.optionNumericFilter = option;
  }
}
