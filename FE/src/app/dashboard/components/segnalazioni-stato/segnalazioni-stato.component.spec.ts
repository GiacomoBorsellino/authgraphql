import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioniStatoComponent } from './segnalazioni-stato.component';

describe('SegnalazioniStatoComponent', () => {
  let component: SegnalazioniStatoComponent;
  let fixture: ComponentFixture<SegnalazioniStatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegnalazioniStatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegnalazioniStatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
