import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverUpdateStatusComponent } from './driver-update-status.component';

describe('DriverUpdateStatusComponent', () => {
  let component: DriverUpdateStatusComponent;
  let fixture: ComponentFixture<DriverUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverUpdateStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
