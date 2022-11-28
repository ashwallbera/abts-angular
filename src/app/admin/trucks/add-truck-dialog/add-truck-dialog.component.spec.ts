import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTruckDialogComponent } from './add-truck-dialog.component';

describe('AddTruckDialogComponent', () => {
  let component: AddTruckDialogComponent;
  let fixture: ComponentFixture<AddTruckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTruckDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTruckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
