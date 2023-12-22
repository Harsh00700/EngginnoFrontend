import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopthree',
  templateUrl: './shopthree.component.html',
  styleUrls: ['./shopthree.component.css']
})
export class ShopthreeComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
