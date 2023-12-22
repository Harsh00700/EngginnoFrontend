import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopone',
  templateUrl: './shopone.component.html',
  styleUrls: ['./shopone.component.css']
})
export class ShoponeComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
