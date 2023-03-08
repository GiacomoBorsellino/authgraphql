import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-sinottico',
  templateUrl: './sinottico.component.html',
  styleUrls: ['./sinottico.component.css'],
})
export class SinotticoComponent implements OnInit {
  public loading: boolean = false;

  public fonteDiretta: number = 0;
  public fonteTelefonica: number = 0;
  public fonteEmail: number = 0;
  public fonteFax: number = 0;
  public fonteWeb: number = 0;

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public data: any = [];

  // Opzioni Grafico
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  // Dati Grafico
  public barChartData: ChartData<'bar'> = {
    labels: ['Diretta', 'Telefonica', 'E-mail', 'Fax', 'Web'],
    datasets: [
      {
        data: this.data,
        label: 'Fonte Richiedente',
      },
    ],
  };

  // Eventi Grafico
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    // console.log(event, active);
  }

  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadFonteRichiedenti();
  }

  loadFonteRichiedenti() {
    this.loading = true;
    this.DashboardService.getCountFonteRichiedenti().subscribe(
      (res) => {
        // Dati
        try {
          console.log('Risposta: ', res.data.getCountFonteRichiedenti);

          this.fonteDiretta = res.data.getCountFonteRichiedenti.diretta;
          this.fonteTelefonica = res.data.getCountFonteRichiedenti.telefonica;
          this.fonteEmail = res.data.getCountFonteRichiedenti.email;
          this.fonteFax = res.data.getCountFonteRichiedenti.fax;
          this.fonteWeb = res.data.getCountFonteRichiedenti.web;

          this.data = [
            this.fonteDiretta,
            this.fonteTelefonica,
            this.fonteEmail,
            this.fonteFax,
            this.fonteWeb,
          ];

          this.barChartData = {
            labels: ['Diretta', 'Telefonica', 'E-mail', 'Fax', 'Web'],
            datasets: [
              {
                data: this.data,
                label: 'Fonte Richiedente',
                backgroundColor: ['rgb(219 234 254)'],
              },
            ],
          };

          this.loading = false;
        } catch {
          this.loading = false;
          this.toastr.error('Si è verificato un errore', 'Errore');
        }
      },
      (error) => {
        console.log('Errore: ', error);
        this.toastr.error('Si è verificato un errore', 'Errore');
        this.loading = false;
      }
    );
  }
}
