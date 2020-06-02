export interface BlogPost {
    filename: string;
    date: string;
    author?: string;
    image?: string;
    title: string;
    description?: string;
}

export interface BlogManifest {
  metaId: string;
  postsPerPage: number;
  posts: BlogPost[];
  authors: Author[];
  secondaryManifestName?: string;
}

export interface Author {
  name: string;
  image: string;
  bio: string;
  twitter: string;
}
