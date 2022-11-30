import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeployedDialogComponent } from './edit-deployed-dialog.component';

describe('EditDeployedDialogComponent', () => {
  let component: EditDeployedDialogComponent;
  let fixture: ComponentFixture<EditDeployedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeployedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeployedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
