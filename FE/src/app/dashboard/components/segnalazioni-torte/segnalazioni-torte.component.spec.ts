import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioniTorteComponent } from './segnalazioni-torte.component';

describe('SegnalazioniTorteComponent', () => {
  let component: SegnalazioniTorteComponent;
  let fixture: ComponentFixture<SegnalazioniTorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegnalazioniTorteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegnalazioniTorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
