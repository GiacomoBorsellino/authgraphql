import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css'],
})
export class CountersComponent implements OnInit {
  constructor(
    private DashboardService: DashboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCounters();
  }

  loading: boolean = false;
  segnaleticaTemporaneaAttiva: number = 0;
  segnaleticaTemporaneaAttivaTime: Date;

  prontoInterventoInCorso: number = 0;
  prontoInterventoInCorsoTime: Date;

  segnalazioniRegistrate: number = 0;
  segnalazioniRegistrateTime: Date;

  geticoGestiti: number = 0;
  geticoGestitiTime: Date;

  // Main Call
  loadCounters() {
    this.loading = true;

    this.DashboardService.getCountSegnaleticaTemporaneaAttiva().subscribe(
      (res) => {
        console.log(res);

        // Dati
        try {
          this.segnaleticaTemporaneaAttiva =
            res.data.getCountSegnaleticaTemporanea;
          this.segnaleticaTemporaneaAttivaTime = new Date();

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

    this.DashboardService.getCountSegnalazioniProntoIntervento().subscribe(
      (res) => {
        console.log(res);

        // Dati
        try {
          this.prontoInterventoInCorso =
            res.data.getCountSegnalazioniProntoIntervento;
          this.prontoInterventoInCorsoTime = new Date();

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

    this.DashboardService.getCountSegnalazioni().subscribe(
      (res) => {
        console.log(res);

        // Dati
        try {
          this.segnalazioniRegistrate = res.data.getCountSegnalazioni;
          this.segnalazioniRegistrateTime = new Date();

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

    this.DashboardService.getCountSegnalazioniGetico().subscribe(
      (res) => {
        console.log(res);

        // Dati
        try {
          this.geticoGestiti = res.data.getCountSegnalazioniGetico;
          this.geticoGestitiTime = new Date();

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
