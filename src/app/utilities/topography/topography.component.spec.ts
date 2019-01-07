import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopographyComponent } from './topography.component';

describe('TopographyComponent', () => {
  let component: TopographyComponent;
  let fixture: ComponentFixture<TopographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
