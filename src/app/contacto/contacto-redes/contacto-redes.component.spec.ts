import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoRedesComponent } from './contacto-redes.component';

describe('ContactoRedesComponent', () => {
  let component: ContactoRedesComponent;
  let fixture: ComponentFixture<ContactoRedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoRedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
