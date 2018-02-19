import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuplanComponent } from './menuplan.component';

describe('MenuplanComponent', () => {
  let component: MenuplanComponent;
  let fixture: ComponentFixture<MenuplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
