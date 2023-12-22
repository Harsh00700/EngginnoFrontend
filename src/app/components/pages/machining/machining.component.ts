import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machining',
  templateUrl: './machining.component.html',
  styleUrls: ['./machining.component.css']
})
export class MachiningComponent implements OnInit {
  // Instagram
  instaclassname = "secondary-bg";
  // Footer style
  classname = "light-overlay light-overlay-2 bg-cover bg-center";
  ftlogo = "assets/img/ELOGO.svg"

  constructor() { }

  ngOnInit() {
  }

}
