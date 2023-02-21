import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ResponseComponent } from './components/library/response/response.component';
import { LoaderComponent } from './components/library/loader/loader.component';

@NgModule({
  declarations: [
    UsersContainerComponent,
    EditUserComponent,
    ListUsersComponent,
    ResponseComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, UsersRoutingModule],
})
export class UsersModule {}
