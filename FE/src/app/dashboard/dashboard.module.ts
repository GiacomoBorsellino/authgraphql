import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CountersComponent } from './components/counters/counters.component';
import { SinotticoComponent } from './components/sinottico/sinottico.component';
import { SegnalazioniStatoComponent } from './components/segnalazioni-stato/segnalazioni-stato.component';
import { SegnalazioniTorteComponent } from './components/segnalazioni-torte/segnalazioni-torte.component';
import { SegnalazioniGeticoComponent } from './components/segnalazioni-getico/segnalazioni-getico.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    CountersComponent,
    SinotticoComponent,
    SegnalazioniStatoComponent,
    SegnalazioniTorteComponent,
    SegnalazioniGeticoComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgChartsModule],
})
export class DashboardModule {}
