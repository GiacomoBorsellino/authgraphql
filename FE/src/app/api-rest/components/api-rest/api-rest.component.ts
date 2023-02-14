import { Component } from '@angular/core';
import { ApiRestService } from '../../services/api-rest.service';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css'],
})
export class ApiRestComponent {
  constructor(private ApiRestService: ApiRestService) {}

  call() {
    // Chiamata API REST normale
    this.ApiRestService.letApiRestData().subscribe((res) => {
      console.log('Response: ', res);
    });
  }

  callOtherDb() {
    // Chiamata API REST normale da altro DB
    this.ApiRestService.letApiRestDataDb2().subscribe((res) => {
      console.log('Response: ', res);
    });
  }
}
