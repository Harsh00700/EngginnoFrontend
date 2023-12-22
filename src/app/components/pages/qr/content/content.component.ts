import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pdfUrl = 'assets/Engginno Brochure Design.pdf';

  sanitizedPdfUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizedPdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

}
