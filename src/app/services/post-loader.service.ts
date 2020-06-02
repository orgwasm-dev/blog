import { Injectable } from '@angular/core';
import * as manifest from '../../assets/blog/md-manifest.json';
import { BlogManifest, BlogPost, Author } from '../model/manifest.model';
import { HttpClient } from '@angular/common/http';
import { MdToHtmlService } from './md-to-html.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostLoaderService {

  private readonly assetsBlogPath = '/assets/blog/';

  private blogPostsToDisplay: BlogManifest;

  constructor(private http: HttpClient, private mdToHtmlService: MdToHtmlService) {
    this.blogPostsToDisplay = manifest['default'];
  }

  get authors(): Author[] {
    return this.blogPostsToDisplay.authors;
  }

  get posts(): BlogPost[] {
    return this.blogPostsToDisplay.posts;
  }

  getFullPath(image: string) {
    return `${this.assetsBlogPath}${image}`;
  }

  findAuthorByName(authorName: string): Author {
    const found = this.blogPostsToDisplay.authors.find(authorObj => authorObj.name === authorName);
    return found ? found : { name: 'anon' } as Author;
  }

  findTitleByFilename(filename: string): string {
    const found = this.blogPostsToDisplay.posts.find(postObj => postObj.filename === filename);
    return found ? found.title : `${filename}`;
  }

  findImgFullPathByAuthorName(authorName: string) {
    const author = this.findAuthorByName(authorName);
    return author ? this.getFullPath(author.image) : null;
  }

  loadItem(filename: string) {
    return this.http.get(`${this.assetsBlogPath}${filename}`, { responseType: 'text' });
  }

  toHtml(filename: string) {
    return this.loadItem(filename).pipe(map(content => {
      return this.mdToHtmlService.toHtml(content.toString());
    }));
  }
}
