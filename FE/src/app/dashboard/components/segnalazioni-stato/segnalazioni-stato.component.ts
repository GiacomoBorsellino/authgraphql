import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-segnalazioni-stato',
  templateUrl: './segnalazioni-stato.component.html',
  styleUrls: ['./segnalazioni-stato.component.css'],
})
export class SegnalazioniStatoComponent {
  constructor() {}

  public lineChartType: ChartType = 'line';

  public rangeSelected: boolean = false;
  public year: number = +new Date().getFullYear();
  public years: number[] = [
    this.year - 4,
    this.year - 3,
    this.year - 2,
    this.year - 1,
    this.year,
    this.year + 1,
    this.year + 2,
    this.year + 3,
    this.year + 4,
  ];
  public months: string[] = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ];

  yearSelected: any;
  monthSelected: any;
  daysInMonth: any;
  rangeData: any[] = [];

  getDays(year: any, month: any) {
    return new Date(year, month, 0).getDate();
  }

  selectRange(value: any) {
    console.log('Valore: ', value);
    this.rangeSelected = !this.rangeSelected;
  }

  yearSelector(year: string) {
    console.log('Anno: ', year);
    this.yearSelected = year;
  }

  monthSelector(month: string) {
    console.log('Mese: ', month);
    this.monthSelected = month;
    let indexMonthSelected = this.months.indexOf(month);
    this.daysInMonth = this.getDays(+this.yearSelected, indexMonthSelected);
    this.rangeData = [];
    for (let i = 1; i < this.daysInMonth; i++) {
      this.rangeData.push(i);
    }

    console.log(this.rangeData);

    // this.lineChartData = {
    //   datasets: [
    //     {
    //       data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90],
    //       label: 'Series A',
    //       backgroundColor: 'rgba(148,159,177,0.2)',
    //       borderColor: 'rgba(148,159,177,1)',
    //       pointBackgroundColor: 'rgba(148,159,177,1)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //       fill: 'origin',
    //     },
    //     {
    //       data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90],
    //       label: 'Series B',
    //       backgroundColor: 'rgba(77,83,96,0.2)',
    //       borderColor: 'rgba(77,83,96,1)',
    //       pointBackgroundColor: 'rgba(77,83,96,1)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgba(77,83,96,1)',
    //       fill: 'origin',
    //     },
    //   ],
    //   labels: this.rangeSelected ? this.years : this.rangeData,
    // };
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
    ],
    labels: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
    },
  };
}
