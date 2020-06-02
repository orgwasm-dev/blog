import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllPostsComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AllPostsComponent
  ]
})
export class PagesModule { }
