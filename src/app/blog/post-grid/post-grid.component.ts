import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Services/Blog/Models';

@Component({
  selector: 'blog-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent implements OnInit {

  @Input() Posts: Post[] = [];
    
  constructor() { }

  ngOnInit(): void {
  }

}
