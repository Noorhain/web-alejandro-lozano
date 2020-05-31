import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePublicacionComponent } from './home-publicacion.component';

describe('HomePublicacionComponent', () => {
  let component: HomePublicacionComponent;
  let fixture: ComponentFixture<HomePublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
