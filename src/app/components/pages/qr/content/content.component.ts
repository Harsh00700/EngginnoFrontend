import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pdfUrl = "assets/Engginno Brochure '24.pdf";

  constructor() { }

  ngOnInit() { }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
