import { Component } from '@angular/core';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css'],
})
export class UsersContainerComponent {
  // Response Handler
  parentResponse: string = '';
  receiveResponse($event: string) {
    this.parentResponse = $event;
  }
}
