export class Post {
  Date: Date;
  Id: number;
  Title: String;
  Categories: [Number];
  Description: String;
  Image: String;
  IsBlogPost: boolean;

  constructor(item: any, isBlogPost: boolean) {
    this.Date = new Date(item.date);
    this.Id = item.id;
    this.Title = item.title.rendered;
    this.Categories = item.categories;
    this.Description = item.excerpt.rendered;
    this.Image = item.better_featured_image.source_url
      ? item.better_featured_image.source_url
      : '';
    this.IsBlogPost = isBlogPost;
  }
}

export class Category {
  Name: string;
  Id: number;

  constructor(item: any) {
    this.Name = item.name;
    this.Id = item.id;
  }
}

export class PostInfo {
  Title: string;
  Content: string;
  IsBlogPost: boolean;
  Date: Date;

  constructor(item: any, isBlogPost: boolean) {
    this.Date = new Date(item.date);
    this.Title = item.title.rendered;
    this.Content = item.content.rendered;
    this.IsBlogPost = isBlogPost;
  }
}
