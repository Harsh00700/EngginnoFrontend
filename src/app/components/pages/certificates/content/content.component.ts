import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  loading: boolean = true;

  certificates = [];

  imageUrl: string;

  page: number = 1;

  constructor(private certificatesService: CertificatesService) {
    this.imageUrl = environment.imageUrl;
  }

  ngOnInit() {
    this.certificatesService.getCertificates().subscribe((res: any) => {
      this.loading = true;

      res.forEach((entry) => {
        if (entry.attributes) {
          this.certificates.push(entry.attributes);
        }
      });

      this.loading = false;
    });
  }

}
