import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesPaginationComponent } from './tables-pagination.component';

describe('TablesPaginationComponent', () => {
  let component: TablesPaginationComponent;
  let fixture: ComponentFixture<TablesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
