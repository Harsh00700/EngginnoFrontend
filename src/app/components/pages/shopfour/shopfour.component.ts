import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopfour',
  templateUrl: './shopfour.component.html',
  styleUrls: ['./shopfour.component.css']
})
export class ShopfourComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
