import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
