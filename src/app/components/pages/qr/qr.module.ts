import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrComponent } from './qr.component';
import { ContentComponent } from './content/content.component';
import { QrRoutingModule } from './qr-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [QrComponent, ContentComponent],
  imports: [
    CommonModule,
    QrRoutingModule,
    NgbModule,
    SharedModule,
    PdfViewerModule
  ]
})
export class QrModule { }
