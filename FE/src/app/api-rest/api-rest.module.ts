import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiRestRoutingModule } from './api-rest-routing.module';
import { ApiRestContainerComponent } from './api-rest-container/api-rest-container.component';
import { ApiRestComponent } from './components/api-rest/api-rest.component';



@NgModule({
  declarations: [
    ApiRestContainerComponent,
    ApiRestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApiRestRoutingModule
  ]
})
export class ApiRestModule { }
