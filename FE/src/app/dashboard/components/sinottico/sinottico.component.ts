import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-sinottico',
  templateUrl: './sinottico.component.html',
  styleUrls: ['./sinottico.component.css'],
})
export class SinotticoComponent implements OnInit {
  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  // Variabili
  public loading: boolean = false;
  public fonteDiretta: number = 0;
  public fonteTelefonica: number = 0;
  public fonteEmail: number = 0;
  public fonteFax: number = 0;
  public fonteWeb: number = 0;

  public selectedQuartiere: string = 'Q';
  public selectedSegnalazioniTotQuartiere: string = '-';
  public selectedSegnalazioniQuartiere: string = '-';
  public selectedProntoInterventoQuartiere: string = '-';

  // Grafico
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
  public data: any = [];

  // Opzioni Grafico
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

    scales: {
      x: {
        grid: {
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
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
        backgroundColor: ['rgb(219 234 254)'],
        borderRadius: 2,
        barThickness: 20,
        borderColor: ['rgb(219 234 254)'],
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
                borderRadius: 2,
                barThickness: 20,
                borderColor: ['rgb(219 234 254)'],
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

  selectQuartiere(quartiere: string) {
    console.log('Quartiere selezionato: ', quartiere);
    this.selectedQuartiere = quartiere;
    this.loading = true;
    this.DashboardService.getSegnalazioniQuartiere(quartiere).subscribe(
      (res) => {
        // Dati
        try {
          console.log('Risposta: ', res.data.getCountSegnalazioniQuartiere);

          this.selectedSegnalazioniTotQuartiere =
            res.data.getCountSegnalazioniQuartiere.totaleQuartiere;

          this.selectedSegnalazioniQuartiere =
            res.data.getCountSegnalazioniQuartiere.giornalieroQuartiere;

          this.selectedProntoInterventoQuartiere =
            res.data.getCountSegnalazioniQuartiere.prontoInterventoQuartiere;

          this.loading = false;
        } catch (err) {
          console.log(err);

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
