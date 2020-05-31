import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPresentacionComponent } from './about-presentacion.component';

describe('AboutPresentacionComponent', () => {
  let component: AboutPresentacionComponent;
  let fixture: ComponentFixture<AboutPresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
