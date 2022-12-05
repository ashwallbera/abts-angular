import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryedComponent } from './view-deliveryed.component';

describe('ViewDeliveryedComponent', () => {
  let component: ViewDeliveryedComponent;
  let fixture: ComponentFixture<ViewDeliveryedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeliveryedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDeliveryedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
