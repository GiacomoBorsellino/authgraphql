import { Component } from '@angular/core';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css'],
})
export class UsersContainerComponent {
  parentError: boolean = false;
  receiveError($event: boolean) {
    this.parentError = $event;
  }
}
