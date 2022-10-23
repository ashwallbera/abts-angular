import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterManagerComponent } from './router-manager.component';

describe('RouterManagerComponent', () => {
  let component: RouterManagerComponent;
  let fixture: ComponentFixture<RouterManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
