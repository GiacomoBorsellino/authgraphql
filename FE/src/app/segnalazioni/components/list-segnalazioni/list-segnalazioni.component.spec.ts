import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSegnalazioniComponent } from './list-segnalazioni.component';

describe('ListSegnalazioniComponent', () => {
  let component: ListSegnalazioniComponent;
  let fixture: ComponentFixture<ListSegnalazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSegnalazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSegnalazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
