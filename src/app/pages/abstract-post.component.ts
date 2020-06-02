import { PostLoaderService } from '../services/post-loader.service';
import { Author } from '../model/manifest.model';

export class AbstractPostsComponent {

  constructor(protected postLoader: PostLoaderService) { }

  imageOfAuthor(authorName: string) {
    return this.postLoader.findImgFullPathByAuthorName(authorName);
  }

  findAuthorByName(authorName: string): Author {
    return this.postLoader.findAuthorByName(authorName);
  }

  getFullPath(image: string) {
    return this.postLoader.getFullPath(image);
  }

}
