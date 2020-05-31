import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEntradasComponent } from './home-entradas.component';

describe('HomeEntradasComponent', () => {
  let component: HomeEntradasComponent;
  let fixture: ComponentFixture<HomeEntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
