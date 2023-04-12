export interface Posts {
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
