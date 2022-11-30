import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeployedDialogComponent } from './view-deployed-dialog.component';

describe('ViewDeployedDialogComponent', () => {
  let component: ViewDeployedDialogComponent;
  let fixture: ComponentFixture<ViewDeployedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeployedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDeployedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
