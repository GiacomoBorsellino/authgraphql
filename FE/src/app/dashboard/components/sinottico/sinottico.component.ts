import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ToastrService } from 'ngx-toastr';

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

  ngOnInit(): void {
    this.loadFonteRichiedenti();
  }

  loading: boolean = false;

  fonteDiretta: number = 0;
  fonteTelefonica: number = 0;
  fonteEmail: number = 0;
  fonteFax: number = 0;
  fonteWeb: number = 0;

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
