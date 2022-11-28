import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTruckDialogComponent } from './edit-truck-dialog.component';

describe('EditTruckDialogComponent', () => {
  let component: EditTruckDialogComponent;
  let fixture: ComponentFixture<EditTruckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTruckDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTruckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
