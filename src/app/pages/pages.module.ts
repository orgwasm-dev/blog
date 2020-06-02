import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { BlogPostHeaderComponent } from './blog-post-header/blog-post-header.component';
import { BlogPostComponent } from './blog-post/blog-post.component';



@NgModule({
  declarations: [AllPostsComponent, AboutUsComponent, BlogPostHeaderComponent, BlogPostComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild()
  ]
})
export class PagesModule { }
