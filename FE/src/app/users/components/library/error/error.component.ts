import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnChanges {
  @Input() childError: boolean = false;

  ngOnChanges() {
    console.log(this.childError + 'In errore');
  }
}
