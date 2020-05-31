import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionReferenciaComponent } from './publicacion-referencia.component';

describe('PublicacionReferenciaComponent', () => {
  let component: PublicacionReferenciaComponent;
  let fixture: ComponentFixture<PublicacionReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
