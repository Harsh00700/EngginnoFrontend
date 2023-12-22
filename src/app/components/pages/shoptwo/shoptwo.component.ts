import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoptwo',
  templateUrl: './shoptwo.component.html',
  styleUrls: ['./shoptwo.component.css']
})
export class ShoptwoComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
