import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/manifest.model';
import { PostRenderDataService } from 'src/app/services/post-render-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  item: BlogPost;
  md: string;
  constructor(private postRenderData: PostRenderDataService) { }

  ngOnInit(): void {
    this.item = this.postRenderData.postMeta;
    this.md = this.postRenderData.postContent;
  }

}
