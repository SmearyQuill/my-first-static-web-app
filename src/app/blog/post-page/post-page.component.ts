import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/Services/Blog/blog.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PostInfo } from 'src/app/Services/Blog/Models';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostPageComponent implements OnInit, OnDestroy {
  PostId: string = '';
  PostInfo: PostInfo = {
    Title: '',
    Content: '',
  };
  Loading: boolean = true;

  Navbar = document.getElementById('menu-navbar');

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.PostId = this.route.snapshot.paramMap.get('id') as string;
    this.GetPostInfo();
    this.AddClassToNavbar();
  }

  ngOnDestroy(): void {
    this.RemoveClassToNavBar();
  }

  GetPostInfo() {
    this.blogService.GetPost(this.PostId).subscribe((response) => {
      this.PostInfo = new PostInfo(response);
      console.log('Informacion del post: ', this.PostInfo);
      this.SanitizePostHtml();
      this.Loading = false;
    });
  }

  SanitizePostHtml() {}

  AddClassToNavbar() {
    if (this.Navbar) {
      this.Navbar.classList.remove('menu-navbar-color');
      this.Navbar.classList.add('custom-navbar-color');
    }
  }

  RemoveClassToNavBar() {
    if (this.Navbar) {
      this.Navbar.classList.remove('custom-navbar-color');
      this.Navbar.classList.add('menu-navbar-color');
    }
  }
}
