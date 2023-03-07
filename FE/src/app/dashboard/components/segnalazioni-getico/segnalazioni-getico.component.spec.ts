import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioniGeticoComponent } from './segnalazioni-getico.component';

describe('SegnalazioniGeticoComponent', () => {
  let component: SegnalazioniGeticoComponent;
  let fixture: ComponentFixture<SegnalazioniGeticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegnalazioniGeticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegnalazioniGeticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
