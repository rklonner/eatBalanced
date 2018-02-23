import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuplanUsersSelectComponent } from './menuplan-users-select.component';

describe('MenuplanUsersSelectComponent', () => {
  let component: MenuplanUsersSelectComponent;
  let fixture: ComponentFixture<MenuplanUsersSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuplanUsersSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuplanUsersSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
