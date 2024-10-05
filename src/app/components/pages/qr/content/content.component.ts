import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('downloadForm') downloadForm: any;

  pdfUrl = "https://media.engginno.com/images/Brochures/Engginno%20Brochure%202024.09.pdf";

  contactFormData: {} | any = {};

  submitted = false;
  error: {} | undefined;

  constructor(private modalService: NgbModal, private qrService: QrService) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.modalService.open(this.downloadForm, { centered: true, backdrop: 'static', backdropClass: 'download-form-popup-modal-backdrop' , windowClass: 'download-form-popup-modal', keyboard: false });
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onSubmit() {
    this.qrService.contactForm(this.contactFormData).subscribe(
      (response) => {
        this.submitted = true;

        console.log('Post request successful:', response);
      },
      (error) => {
        this.error = error;
        console.error('Error making post request:', error);
      }
    );
  }
}
