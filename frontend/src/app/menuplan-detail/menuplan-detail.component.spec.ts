import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuplanDetailComponent } from './menuplan-detail.component';

describe('MenuplanDetailComponent', () => {
  let component: MenuplanDetailComponent;
  let fixture: ComponentFixture<MenuplanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuplanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuplanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
