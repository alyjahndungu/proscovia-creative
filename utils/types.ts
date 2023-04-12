export interface Posts {
  [x: string]: any;
  author: {
    id: string;
    name: string;
    about: string;
    avatar: {
      url: string;
    };
  };
  id: string;
  slug: string;
  title: string;
  createdAt: Date;
  excerpt: string;
  featuredPost: boolean;
  publishedAt: Date;
  categories: {
    name: string;
    slug: string;
  }[];
  featuredImage: {
    url: string;
  };
}

export interface CategoryType {
  name: string;
  slug: string;
}

export interface AuthorType {
  id: string;
  name: string;
  about: string;
  avatar: {
    url: string;
  };
}
