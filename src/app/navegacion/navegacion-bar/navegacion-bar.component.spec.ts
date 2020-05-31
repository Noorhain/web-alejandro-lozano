import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionBarComponent } from './navegacion-bar.component';

describe('NavegacionBarComponent', () => {
  let component: NavegacionBarComponent;
  let fixture: ComponentFixture<NavegacionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
