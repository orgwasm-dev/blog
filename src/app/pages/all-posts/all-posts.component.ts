import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/manifest.model';
import { PostLoaderService } from 'src/app/services/post-loader.service';
import { AbstractPostsComponent } from '../abstract-post.component';
import { PostRenderDataService } from 'src/app/services/post-render-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent extends AbstractPostsComponent implements OnInit {

  posts: BlogPost[];

  constructor(
    private postLoaderService: PostLoaderService,
    private postRenderData: PostRenderDataService,
    private router: Router) {
    super(postLoaderService);
  }

  ngOnInit(): void {
    this.posts = this.postLoader.posts;
  }

  loadPost(event: any, item: BlogPost) {
    this.postLoaderService.toHtml(item.filename).subscribe(htmlString => {
      this.postRenderData.postMeta = item;
      this.postRenderData.postContent = htmlString;
      this.router.navigateByUrl(`/post/${item.filename}`);
    });
  }
}
