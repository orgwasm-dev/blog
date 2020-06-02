import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './modules/pages/all-posts/all-posts.component';
import { AboutUsComponent } from './modules/pages/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllPostsComponent
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
