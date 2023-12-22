import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CertificatesComponent, ContentComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    NgbModule,
    NgMasonryGridModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class CertificatesModule { }
