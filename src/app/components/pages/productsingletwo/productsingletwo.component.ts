import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsingletwo',
  templateUrl: './productsingletwo.component.html',
  styleUrls: ['./productsingletwo.component.css']
})
export class ProductsingletwoComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
