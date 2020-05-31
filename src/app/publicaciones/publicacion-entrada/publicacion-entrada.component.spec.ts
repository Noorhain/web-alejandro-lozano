import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionEntradaComponent } from './publicacion-entrada.component';

describe('PublicacionEntradaComponent', () => {
  let component: PublicacionEntradaComponent;
  let fixture: ComponentFixture<PublicacionEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
