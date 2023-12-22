import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  // Instagram
  instaclassname = "primary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"
  ngOnInit(): void {
  }

}
