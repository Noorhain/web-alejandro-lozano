import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVistaMiniaturasComponent } from './blog-vista-miniaturas.component';

describe('BlogVistaMiniaturasComponent', () => {
  let component: BlogVistaMiniaturasComponent;
  let fixture: ComponentFixture<BlogVistaMiniaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogVistaMiniaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVistaMiniaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
