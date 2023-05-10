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

  GetCategories(): Observable<any[]> {
    const URL = `${BlogUrl}/categories`;
    return this.http.get<any>(URL);    
  }

  GetPosts(): Observable<any[]> {
    const URL = `${BlogUrl}/posts`;
    return this.http.get<any>(URL);
  }
}
