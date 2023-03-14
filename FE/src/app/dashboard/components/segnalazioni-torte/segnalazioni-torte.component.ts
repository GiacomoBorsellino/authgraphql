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

  public severitaChiuseRosso: number = 0;
  public severitaChiuseGiallo: number = 0;
  public severitaChiuseVerde: number = 0;
  public severitaChiuseBianco: number = 0;

  public startDate: string = new Date().getFullYear() + '-01-01T00:00:00';
  public endDate: string = new Date().getFullYear() + '-12-31T00:00:00';

  public dataTotali: any = [0, 0, 0, 0];
  public dataChiusi: any = [0, 0, 0, 0];

  public lastSegnalazioni: any = [];
  public lastSegnalazioniTime: any;

  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadSegnalazioniPieTotali(this.startDate, this.endDate);
    this.loadSegnalazioniPieChiuse(this.startDate, this.endDate);
    this.loadLastSegnalazioni();
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

  // Main Call - Grafici Segnalazioni Severità Torte
  loadSegnalazioniPieTotali(valoreGt: string, valoreLt: string) {
    console.log('Valori: ', valoreGt, valoreLt);

    if (valoreGt !== null && valoreLt !== null && valoreGt < valoreLt) {
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

            this.dataTotali = [
              this.severitaTotaleRosso,
              this.severitaTotaleGiallo,
              this.severitaTotaleVerde,
              this.severitaTotaleBianco,
            ];

            this.datiGraficoTotali = {
              labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
              datasets: [
                {
                  data: this.dataTotali,
                  backgroundColor: ['#fa6060', '#faf560', '#60fa65', '#fcfcfc'],
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
    } else if (valoreGt > valoreLt) {
      this.toastr.error('Intervallo non valido', 'Errore');
    }
  }

  // Main Call - Grafici Segnalazioni Severità Torte
  loadSegnalazioniPieChiuse(valoreGt: string, valoreLt: string) {
    console.log('Valori: ', valoreGt, valoreLt);

    if (valoreGt !== null && valoreLt !== null && valoreGt < valoreLt) {
      this.DashboardService.getCountSegnalazioniSeveritaChiuse(
        valoreGt,
        valoreLt
      ).subscribe(
        (res) => {
          // Dati
          try {
            console.log('Segnalazioni Severità Res: ', res);
            this.severitaChiuseRosso =
              res.data.getCountSegnalazioniSeveritaChiuse.rosso;
            this.severitaChiuseGiallo =
              res.data.getCountSegnalazioniSeveritaChiuse.giallo;
            this.severitaChiuseVerde =
              res.data.getCountSegnalazioniSeveritaChiuse.verde;
            this.severitaChiuseBianco =
              res.data.getCountSegnalazioniSeveritaChiuse.bianco;

            this.dataChiusi = [
              this.severitaChiuseRosso,
              this.severitaChiuseGiallo,
              this.severitaChiuseVerde,
              this.severitaChiuseBianco,
            ];

            this.datiGraficoChiuse = {
              labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
              datasets: [
                {
                  data: this.dataChiusi,
                  backgroundColor: ['#fa6060', '#faf560', '#60fa65', '#fcfcfc'],
                },
              ],
            };

            this.loading = false;
          } catch (err) {
            this.loading = false;
            console.log(err);

            this.toastr.error('Si è verificato un errore AA', 'Errore');
          }
        },
        (error) => {
          console.log('Errore: ', error);
          this.toastr.error('Si è verificato un errore', 'Errore');
          this.loading = false;
        }
      );
    } else if (valoreGt > valoreLt) {
      this.toastr.error('Intervallo non valido', 'Errore');
    }
  }

  // Opzioni Grafico Totali
  public opzioniGraficoTotali: ChartConfiguration['options'] = {
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

  // Dati Grafico Totali
  public datiGraficoTotali: ChartData<'pie', number[], string | string[]> = {
    labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
    datasets: [
      {
        data: this.dataTotali,
        backgroundColor: ['#fa6060', '#faf560', '#60fa65', '#fcfcfc'],
      },
    ],
  };

  // Opzioni Grafico Chiusi
  public opzioniGraficoChiuse: ChartConfiguration['options'] = {
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

  // Dati Grafico Chiusi
  public datiGraficoChiuse: ChartData<'pie', number[], string | string[]> = {
    labels: [['Rosso'], ['Giallo'], ['Verde'], ['Bianco']],
    datasets: [
      {
        data: this.dataChiusi,
        backgroundColor: ['#fa6060', '#faf560', '#60fa65', '#fcfcfc'],
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
