import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostHeaderComponent } from './blog-post-header.component';

describe('BlogPostComponent', () => {
  let component: BlogPostHeaderComponent;
  let fixture: ComponentFixture<BlogPostHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
