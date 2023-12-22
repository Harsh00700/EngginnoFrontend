import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogmasonry',
  templateUrl: './blogmasonry.component.html',
  styleUrls: ['./blogmasonry.component.css']
})
export class BlogmasonryComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
