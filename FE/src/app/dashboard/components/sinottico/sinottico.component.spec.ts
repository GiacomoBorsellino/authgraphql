import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinotticoComponent } from './sinottico.component';

describe('SinotticoComponent', () => {
  let component: SinotticoComponent;
  let fixture: ComponentFixture<SinotticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinotticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinotticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
