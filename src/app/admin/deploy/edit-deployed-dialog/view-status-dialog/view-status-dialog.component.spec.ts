import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatusDialogComponent } from './view-status-dialog.component';

describe('ViewStatusDialogComponent', () => {
  let component: ViewStatusDialogComponent;
  let fixture: ComponentFixture<ViewStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStatusDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
