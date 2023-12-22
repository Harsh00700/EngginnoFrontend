import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrComponent } from './qr.component';
import { ContentComponent } from './content/content.component';
import { QrRoutingModule } from './qr-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [QrComponent, ContentComponent],
  imports: [
    CommonModule,
    QrRoutingModule,
    NgbModule,
    SharedModule,
  ]
})
export class QrModule { }
