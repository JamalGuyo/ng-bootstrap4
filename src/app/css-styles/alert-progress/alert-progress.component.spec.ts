import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertProgressComponent } from './alert-progress.component';

describe('AlertProgressComponent', () => {
  let component: AlertProgressComponent;
  let fixture: ComponentFixture<AlertProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
