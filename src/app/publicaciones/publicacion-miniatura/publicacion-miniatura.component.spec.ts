import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionMiniaturaComponent } from './publicacion-miniatura.component';

describe('PublicacionMiniaturaComponent', () => {
  let component: PublicacionMiniaturaComponent;
  let fixture: ComponentFixture<PublicacionMiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionMiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionMiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
