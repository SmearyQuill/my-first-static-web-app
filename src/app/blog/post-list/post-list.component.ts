import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/Blog/blog.service';
import { Category, Post } from 'src/app/Services/Blog/Models';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  private Categories: Category[] = [];
  Posts: Post[] = [];
  BlogPosts: Post[] = [];
  NewsPosts: Post[] = [];

  ngOnInit(): void {
    this.InitPage();
  }

  InitPage() {
    this.GetCategories();
  }

  GetCategories() {
    this.blogService.GetCategories().subscribe((response) => {
      this.Categories = response.map((x) => new Category(x));
      this.GetPosts();
    });
  }

  GetPosts() {
    this.blogService.GetPosts().subscribe((response) => {
      this.Posts = response.map((x) => new Post(x, false));
      this.SeparatePosts();
    });
  }

  SeparatePosts() {
    let BlogCategoryId = this.Categories.find((x) => x.Name == 'Blog')?.Id;
    let NewsCategoryId = this.Categories.find((x) => x.Name == 'Noticias')?.Id;
    
    this.BlogPosts = this.Posts.filter((x) =>
      x.Categories.includes(BlogCategoryId ? BlogCategoryId : -1)
    );
    this.NewsPosts = this.Posts.filter((x) =>
      x.Categories.includes(NewsCategoryId ? NewsCategoryId : -1)
    );
  }

  RenderTabPosts() {
    console.log('Renderizando tab');
  }

  FilterPostByCategory() {}
}
