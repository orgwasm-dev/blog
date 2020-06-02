import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllPostsComponent
  },
  {
    path: 'home',
    component: AllPostsComponent
  },
  {
    path: 'post/:filename',
    component: BlogPostComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
