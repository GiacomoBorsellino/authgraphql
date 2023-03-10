import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-segnalazioni-torte',
  templateUrl: './segnalazioni-torte.component.html',
  styleUrls: ['./segnalazioni-torte.component.css'],
})
export class SegnalazioniTorteComponent {
  // Variabili
  public loading: boolean = false;
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  public NC: number;
  public DV: number;
  public IM: number;
  public IN: number;
  public sopralluogoEffettuato: number;
  public sopralluogoNonEffettuato: number;
  public sopralluogoNonRichiesto: number;
  public data: any = [0, 0, 0, 0];
  public dataSopralluoghi: any = [0, 0, 0];
  public lastSegnalazioni: any = [];
  public lastSegnalazioniTime: any;

  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSegnalazioniPie();
    this.loadLastSegnalazioni();
  }

  loadSegnalazioniPie() {
    this.DashboardService.getCountSegnalazioniGetico().subscribe(
      (res) => {
        // Dati
        try {
          console.log('Getico Res: ', res);
          this.NC = res.data.getCountSegnalazioniGetico.NC;
          this.DV = res.data.getCountSegnalazioniGetico.DV;
          this.IM = res.data.getCountSegnalazioniGetico.IM;
          this.IN = res.data.getCountSegnalazioniGetico.IN;

          this.data = [this.NC, this.DV, this.IM, this.IN];

          this.sopralluogoEffettuato =
            res.data.getCountSegnalazioniGetico.sopralluogoEffettuato;
          this.sopralluogoNonEffettuato =
            res.data.getCountSegnalazioniGetico.sopralluogoNonEffettuato;
          this.sopralluogoNonRichiesto =
            res.data.getCountSegnalazioniGetico.sopralluogoNonRichiesto;

          this.dataSopralluoghi = [
            this.sopralluogoEffettuato,
            this.sopralluogoNonEffettuato,
            this.sopralluogoNonRichiesto,
          ];

          this.pieChartData = {
            labels: [['NC'], ['DV'], ['IM'], ['IN']],
            datasets: [
              {
                data: this.data,
              },
            ],
          };

          this.pieChartDataSopralluoghi = {
            labels: [['SE'], ['SN'], ['SNR']],
            datasets: [
              {
                data: this.dataSopralluoghi,
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

  loadLastSegnalazioni() {
    this.DashboardService.getLastSegnalazioni().subscribe(
      (res) => {
        // Dati
        try {
          console.log('Segn Last Res: ', res);
          this.lastSegnalazioni = res.data.getLastSegnalazioni;
          this.lastSegnalazioniTime = new Date();

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

  // Opzioni Grafico
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };

  // Dati Grafico
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['NC'], ['DV'], ['IM'], ['IN']],
    datasets: [
      {
        data: this.data,
      },
    ],
  };

  // Dati Grafico
  public pieChartDataSopralluoghi: ChartData<
    'pie',
    number[],
    string | string[]
  > = {
    labels: [['SE'], ['SN'], ['SNR']],
    datasets: [
      {
        data: this.dataSopralluoghi,
      },
    ],
  };

  // Eventi Grafico
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    // console.log(event, active);
  }
}
