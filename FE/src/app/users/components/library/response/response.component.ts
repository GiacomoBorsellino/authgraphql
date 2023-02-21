import { Component, Input, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnChanges {
  @Input() childResponse: string = '';
  constructor(private toastr: ToastrService) {}

  ngOnChanges() {
    console.log(this.childResponse + 'In errore');
    if (this.childResponse === 'error') {
      this.toastr.error('Si è verificato un errore', 'Errore');
    } else if (this.childResponse === 'success') {
      this.toastr.success('Operazione avvenuta con successo', 'Successo');
    } else if (this.childResponse === 'warning') {
      this.toastr.warning('Attenzione a questa operazione', 'Attenzione');
    } else if (this.childResponse === 'info') {
      this.toastr.info('Descrizione operazione effettuata', 'Nota');
    }
  }
}
