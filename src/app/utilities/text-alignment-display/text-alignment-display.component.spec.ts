import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignmentDisplayComponent } from './text-alignment-display.component';

describe('TextAlignmentDisplayComponent', () => {
  let component: TextAlignmentDisplayComponent;
  let fixture: ComponentFixture<TextAlignmentDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAlignmentDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAlignmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
