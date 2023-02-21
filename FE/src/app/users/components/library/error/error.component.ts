import { Component, Input, OnChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnChanges {
  @Input() childError: boolean = false;
  constructor(private toastr: ToastrService) {}

  ngOnChanges() {
    console.log(this.childError + 'In errore');
    if (this.childError) {
      this.toastr.error('Si è verificato un errore', 'Errore');
    }
  }
}
