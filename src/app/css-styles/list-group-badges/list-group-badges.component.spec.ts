import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupBadgesComponent } from './list-group-badges.component';

describe('ListGroupBadgesComponent', () => {
  let component: ListGroupBadgesComponent;
  let fixture: ComponentFixture<ListGroupBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
