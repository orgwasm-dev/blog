import { Component, OnInit, Input } from '@angular/core';
import { AbstractPostsComponent } from '../abstract-post.component';
import { PostLoaderService } from 'src/app/services/post-loader.service';
import { BlogPost } from 'src/app/model/manifest.model';

@Component({
  selector: 'app-blog-post-header',
  templateUrl: './blog-post-header.component.html',
  styleUrls: ['./blog-post-header.component.scss']
})
export class BlogPostHeaderComponent extends AbstractPostsComponent implements OnInit {

  @Input() item: BlogPost;
  @Input() mdContent: string;

  constructor(private postLoaderService: PostLoaderService) { super(postLoaderService); }

  ngOnInit(): void {
    const file = this.postLoaderService.loadItem(this.item?.filename);
    console.log('BlogPostHeaderComponent -> item, file', this.item, file);
  }

}
