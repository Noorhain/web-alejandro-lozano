import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntradaComponent } from './blog-entrada.component';

describe('BlogEntradaComponent', () => {
  let component: BlogEntradaComponent;
  let fixture: ComponentFixture<BlogEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
