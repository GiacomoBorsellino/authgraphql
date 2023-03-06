import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SegnalazioniRoutingModule } from './segnalazioni-routing.module';

import { SegnalazioniContainerComponent } from './segnalazioni-container/segnalazioni-container.component';
import { ListSegnalazioniComponent } from './components/list-segnalazioni/list-segnalazioni.component';
import { EditSegnalazioniComponent } from './components/edit-segnalazioni/edit-segnalazioni.component';

@NgModule({
  declarations: [SegnalazioniContainerComponent, ListSegnalazioniComponent, EditSegnalazioniComponent],
  imports: [CommonModule, FormsModule, SegnalazioniRoutingModule],
})
export class SegnalazioniModule {}
