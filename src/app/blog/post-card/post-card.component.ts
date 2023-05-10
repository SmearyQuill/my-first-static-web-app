import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Services/Blog/Models';

@Component({
  selector: 'blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() PostCardData: Post = {
    Date: new Date(Date.now()),
    Id: -1,
    Title: '',
    Categories: [-1],
    Description: '',
    Image: '',
    IsBlogPost: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
