import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SegnalazioniService } from '../../services/segnalazioni.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-segnalazioni',
  templateUrl: './list-segnalazioni.component.html',
  styleUrls: ['./list-segnalazioni.component.css'],
})
export class ListSegnalazioniComponent implements OnInit {
  constructor(
    private SegnalazioniService: SegnalazioniService,
    private toastr: ToastrService
  ) {}

  // Response Handler: Success, Error, Info, Warning
  @Output() responseEvent = new EventEmitter<string>();

  datas: any = [];
  datasCount: number;
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
  order: any = [];
  colonnaInFilter: any = {};
  selectedColumn: string;
  optionNumericFilter: string = '';
  optionDateFilter: string = '';
  checkSorting: boolean;

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
          this.filter,
          this.order
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
      for (let i = 1; i < 10; i++) {
        this.rowsData.pop();
      }
    } else {
      for (let i = 1; i < this.selectedColumns.length; i++) {
        if (this.selectedColumns[i] === colonnaSelezionata) {
          this.selectedColumns.splice(i, 1);
        }
      }
      for (let i = 1; i < 10; i++) {
        this.rowsData.shift();
      }
    }
    this.loadSegnalazioni(
      this.selectedColumns,
      this.indexPoint,
      this.filter,
      this.order
    );
  }

  toggleModalModalSelectorColumns() {
    this.columnsModal = !this.columnsModal;
  }

  // Main Call
  loadSegnalazioni(data: any, indexPoint: number, filter: object, order: any) {
    this.loading = true;

    // Riordino Colonne a struttura originale
    data = this.originalPositionedColumns
      .filter((item: any) => data.includes(item))
      .map((item: any) => item);

    // console.log('Body riordinato: ', this.originalPositionedColumns, data);

    this.SegnalazioniService.getSegnalazioni(
      data,
      indexPoint,
      filter,
      order
    ).subscribe(
      (res) => {
        // Dati
        this.datas = res.data.getSegnalazioni.data;
        // console.log('bobo ', res.data.getSegnalazioni.data);
        if (this.datas.length !== 0) {
          this.datasCount = res.data.getSegnalazioni.count;
          this.typeDataColumns = JSON.parse(
            res.data.getSegnalazioni.typeDataColumns
          );
          this.limitPagination = Math.ceil(this.datasCount / 10);
          // console.log('Lista: ', this.datas);

          // Colonne
          this.columnsData = Object.keys(this.datas[0]);
          // console.log('Colonne: ', this.columnsData, this.columnsData.length);

          // Righe
          this.rowsData = []; // Pulizia righe post filtro
          this.datas.map((row: any) => {
            let singleRow = Object.values(row);
            // Conversione per tipo di dato, discriminante date | Considera: Non Numeri, Non Null e Stringhe con lunghezza superiore a 10 caratteri*
            // * Difficile che un numero stringihficato abbia un valore superiore a i 1x10^10, si spera
            // let rowsFiltered = [];
            // for (let i = 0; i < singleRow.length; i++) {
            //   try {
            //     let rowDate: any = singleRow[i];
            //     if (
            //       typeof rowDate !== 'number' &&
            //       rowDate !== null &&
            //       rowDate.length > 10
            //     ) {
            //       let dateFilter = new Date(rowDate)
            //         .toISOString()
            //         .substring(0, 10);
            //       rowsFiltered.push(dateFilter);
            //     } else {
            //       rowsFiltered.push(singleRow[i]);
            //     }
            //   } catch (err) {
            //     rowsFiltered.push(singleRow[i]);
            //   }
            // }
            // this.rowsData.push(rowsFiltered);

            this.rowsData.push(singleRow);
          });
          // console.log('Righe: ', this.datas);

          this.loading = false;
          // this.colonnaInFilter = ''; // Ricorda, il reset va alla fine dell'operazione
        } else {
          this.columnsData = this.originalPositionedColumns;
          this.rowsData = [];
          this.datasCount = 0;
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

      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    }
  }

  downPage() {
    if (this.indexPoint - 10 > -1) {
      this.indexPoint = this.indexPoint - 10;

      for (let i = 0; i < 10; i++) {
        this.rowsData.shift();
      }

      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    }
  }

  // Clean Filters
  cleanAllFilters() {
    this.filter = {};
    this.order = [];
    console.log(this.order, this.filter);

    this.loadSegnalazioni(
      this.selectedColumns,
      this.indexPoint,
      this.filter,
      this.order
    );
  }

  // Switch/Detect Filters
  switchFilter(column: any) {
    this.colonnaInFilter = column;
    console.log(this.colonnaInFilter);
    this.selectedColumn = column;
    console.log('typeDataColumns: ', this.typeDataColumns);

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

  // Sorting Filter
  sortFilter(column: any) {
    this.checkSorting = !this.checkSorting;
    this.order = [];
    if (this.checkSorting === true) {
      let obj = { [column]: 'desc' };
      this.order = obj;

      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
      console.log('desc: ', this.order);
    } else {
      let obj = { [column]: 'asc' };
      this.order = obj;

      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
      console.log('asc: ', this.order);
    }
  }

  // check if input is inside a column with string
  // Switch/Detect Filters
  checkIfStringFilter(column: any) {
    this.colonnaInFilter = column;
    console.log(this.colonnaInFilter);
    this.selectedColumn = column;
    console.log('typeDataColumns: ', this.typeDataColumns);
    let check: boolean = false;
    let typeOfColumn: string;
    this.typeDataColumns.map((colonna: any) => {
      if (colonna.nameColumn === column) {
        typeOfColumn = colonna.typeData;
        if (
          (typeOfColumn === 'character varying' && !column.includes('data')) ||
          (typeOfColumn === 'text' && !column.includes('data'))
        ) {
          check = true;
        } else {
          check = false;
        }
      }
    });
    console.log(this.filter);

    if (check) {
      return true;
    } else {
      return false;
    }
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
    // Pulizia filtro
    delete this.filter[this.colonnaInFilter];
    if (this.optionNumericFilter === 'Uguale a') {
      console.log(this.filter);
      this.filter[this.colonnaInFilter] = valoreInput1;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    } else if (this.optionNumericFilter === 'Maggiore di') {
      let greaterValue: any = {};
      greaterValue.gt = valoreInput1;
      this.filter[this.colonnaInFilter] = greaterValue;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    } else if (this.optionNumericFilter === 'Minore di') {
      let lowerValue: any = {};
      lowerValue.lt = valoreInput1;
      this.filter[this.colonnaInFilter] = lowerValue;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
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
          this.filter,
          this.order
        );
      } else {
        this.toastr.error('Intervallo non valido, ritentare', 'Errore');
      }
    } else if (this.optionNumericFilter === 'Azzera filtro') {
      delete this.filter[this.colonnaInFilter];
      console.log('filt ', this.filter);
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    }
    this.optionNumericFilter === 'Azzera filtro';
  }

  changeOptionNumeric(option: any) {
    this.optionNumericFilter = option;
  }

  filterString(valoreInput: string) {
    console.log(valoreInput);

    // Pulizia filtro
    delete this.filter[this.colonnaInFilter];
    let nomeColonna: any = {};
    nomeColonna.contains = valoreInput;
    nomeColonna.mode = 'insensitive';
    this.filter[this.colonnaInFilter] = nomeColonna;
    console.log(this.filter);

    this.loadSegnalazioni(
      this.selectedColumns,
      this.indexPoint,
      this.filter,
      this.order
    );
  }

  filterDate(valoreInput1: any, valoreInput2: any) {
    // Pulizia filtro
    delete this.filter[this.colonnaInFilter];
    console.log(this.filter);

    valoreInput1 = new Date(valoreInput1).toISOString();
    valoreInput2 = new Date(valoreInput2).toISOString();
    console.log(valoreInput1, valoreInput2);

    if (this.optionDateFilter === 'Uguale a') {
      console.log(this.filter);
      this.filter[this.colonnaInFilter] = valoreInput1;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    } else if (this.optionDateFilter === 'Maggiore di') {
      let greaterValue: any = {};
      greaterValue.gt = valoreInput1;
      this.filter[this.colonnaInFilter] = greaterValue;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    } else if (this.optionDateFilter === 'Minore di') {
      let lowerValue: any = {};
      lowerValue.lt = valoreInput1;
      this.filter[this.colonnaInFilter] = lowerValue;
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    } else if (this.optionDateFilter === 'Compreso tra') {
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
          this.filter,
          this.order
        );
      } else {
        this.toastr.error('Intervallo non valido, ritentare', 'Errore');
      }
    } else if (this.optionDateFilter === 'Azzera filtro') {
      delete this.filter[this.colonnaInFilter];
      console.log('filt ', this.filter);
      this.loadSegnalazioni(
        this.selectedColumns,
        this.indexPoint,
        this.filter,
        this.order
      );
    }
    this.optionDateFilter === 'Azzera filtro';
  }

  changeOptionDate(option: any) {
    this.optionDateFilter = option;
  }

  deleteRecord(id: any) {
    console.log('Delete ID: ', id);
  }

  editRecord(id: any) {
    console.log('Edit ID: ', id);
  }
}
