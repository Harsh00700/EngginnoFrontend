import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit() {
  }

}
