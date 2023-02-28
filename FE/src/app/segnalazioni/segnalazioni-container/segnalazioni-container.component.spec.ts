import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegnalazioniContainerComponent } from './segnalazioni-container.component';

describe('SegnalazioniContainerComponent', () => {
  let component: SegnalazioniContainerComponent;
  let fixture: ComponentFixture<SegnalazioniContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegnalazioniContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegnalazioniContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
