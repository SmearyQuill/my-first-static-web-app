import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post, Category } from './Models';

const BlogUrl = 'https://radarcontroltotal.wpcomstaging.com/wp-json/wp/v2';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  Categories: Category[] = [];

  SetCategories(Result: Category[]) {
    this.Categories = Result;
  }

  GetCategories(): Observable<any[]> {
    this.ResetCategories();
    const URL = `${BlogUrl}/categories`;
    return this.http.get<any>(URL);
  }

  ResetCategories() {
    this.Categories = [];
  }

  GetPosts(): Observable<any[]> {
    const URL = `${BlogUrl}/posts`;
    return this.http.get<any>(URL);
  }

  GetPost(id: string): Observable<any> {
    const URL = `${BlogUrl}/posts/${id}`;
    return this.http.get<any>(URL);
  }

  CheckIfPostIsBlog(PostCategories: number[]): boolean {
    let BlogCategoryId = this.Categories.find((x) => x.Name == 'Blog')?.Id;
    if (BlogCategoryId) {
      return PostCategories.includes(BlogCategoryId);
    }
    return false;
  }
}
