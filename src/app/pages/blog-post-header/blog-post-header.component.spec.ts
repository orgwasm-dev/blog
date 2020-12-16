import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogPostHeaderComponent } from './blog-post-header.component';

describe('BlogPostComponent', () => {
  let component: BlogPostHeaderComponent;
  let fixture: ComponentFixture<BlogPostHeaderComponent>;

  beforeEach(waitForAsync(() => {
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
