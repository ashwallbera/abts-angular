import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsReadComponent } from './records-read.component';

describe('RecordsReadComponent', () => {
  let component: RecordsReadComponent;
  let fixture: ComponentFixture<RecordsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
