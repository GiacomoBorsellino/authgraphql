import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestContainerComponent } from './api-rest-container.component';

describe('ApiRestContainerComponent', () => {
  let component: ApiRestContainerComponent;
  let fixture: ComponentFixture<ApiRestContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRestContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
