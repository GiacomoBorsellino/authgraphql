import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegnalazioniContainerComponent } from './segnalazioni-container/segnalazioni-container.component';

const routes: Routes = [
  {
    path: '',
    component: SegnalazioniContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegnalazioniRoutingModule {}
