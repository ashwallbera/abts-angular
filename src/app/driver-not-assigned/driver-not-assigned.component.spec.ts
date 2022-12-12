import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverNotAssignedComponent } from './driver-not-assigned.component';

describe('DriverNotAssignedComponent', () => {
  let component: DriverNotAssignedComponent;
  let fixture: ComponentFixture<DriverNotAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverNotAssignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverNotAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
