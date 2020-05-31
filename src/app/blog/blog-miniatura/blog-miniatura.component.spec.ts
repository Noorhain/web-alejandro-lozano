import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMiniaturaComponent } from './blog-miniatura.component';

describe('BlogMiniaturaComponent', () => {
  let component: BlogMiniaturaComponent;
  let fixture: ComponentFixture<BlogMiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
