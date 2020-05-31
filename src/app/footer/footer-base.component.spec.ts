import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBaseComponent } from './footer-base.component';

describe('FooterBaseComponent', () => {
  let component: FooterBaseComponent;
  let fixture: ComponentFixture<FooterBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
