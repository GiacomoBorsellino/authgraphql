import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRestContainerComponent } from './/api-rest-container/api-rest-container.component';

const routes: Routes = [
  {
    path: '',
    component: ApiRestContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRestRoutingModule { }
