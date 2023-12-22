import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postsingle',
  templateUrl: './postsingle.component.html',
  styleUrls: ['./postsingle.component.css']
})
export class PostsingleComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
