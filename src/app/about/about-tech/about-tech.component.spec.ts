import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechComponent } from './about-tech.component';

describe('AboutTechComponent', () => {
  let component: AboutTechComponent;
  let fixture: ComponentFixture<AboutTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
