import { Injectable } from '@angular/core';
import { BlogPost } from '../model/manifest.model';

@Injectable({
  providedIn: 'root'
})
export class PostRenderDataService {

  postMeta: BlogPost;
  postContent: string;

  constructor() { }
}
