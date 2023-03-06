import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSegnalazioniComponent } from './edit-segnalazioni.component';

describe('EditSegnalazioniComponent', () => {
  let component: EditSegnalazioniComponent;
  let fixture: ComponentFixture<EditSegnalazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSegnalazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSegnalazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
