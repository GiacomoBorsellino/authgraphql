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

  public severitaTotaleRosso: number = 0;
  public severitaTotaleGiallo: number = 0;
  public severitaTotaleVerde: number = 0;
  public severitaTotaleBianco: number = 0;

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
    this.loadSegnalazioniPie('2022-01-01T00:00:00', '2022-12-31T00:00:00');
    this.loadLastSegnalazioni();
  }

  // Main Call - Grafici Segnalazioni Severità Torte
  loadSegnalazioniPie(valoreGt: string, valoreLt: string) {
    console.log('Valori: ', valoreGt, valoreLt);

    this.DashboardService.getCountSegnalazioniSeveritaTotali(
      valoreGt,
      valoreLt
    ).subscribe(
      (res) => {
        // Dati
        try {
          console.log('Segnalazioni Severità Res: ', res);
          this.severitaTotaleRosso =
            res.data.getCountSegnalazioniSeveritaTotali.rosso;
          this.severitaTotaleGiallo =
            res.data.getCountSegnalazioniSeveritaTotali.giallo;
          this.severitaTotaleVerde =
            res.data.getCountSegnalazioniSeveritaTotali.verde;
          this.severitaTotaleBianco =
            res.data.getCountSegnalazioniSeveritaTotali.bianco;

          this.data = [
            this.severitaTotaleRosso,
            this.severitaTotaleGiallo,
            this.severitaTotaleVerde,
            this.severitaTotaleBianco,
          ];

          this.dataSopralluoghi = [
            this.sopralluogoEffettuato,
            this.sopralluogoNonEffettuato,
            this.sopralluogoNonRichiesto,
          ];

          this.pieChartData = {
            labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
            datasets: [
              {
                data: this.data,
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

  // Main Call - Ultime segnalazioni odierne
  loadLastSegnalazioni() {
    this.DashboardService.getLastSegnalazioni().subscribe(
      (res) => {
        // Dati
        try {
          // console.log('Segn Last Res: ', res);
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
    labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
    datasets: [
      {
        data: this.data,
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
