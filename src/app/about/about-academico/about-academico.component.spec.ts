import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAcademicoComponent } from './about-academico.component';

describe('AboutAcademicoComponent', () => {
  let component: AboutAcademicoComponent;
  let fixture: ComponentFixture<AboutAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
