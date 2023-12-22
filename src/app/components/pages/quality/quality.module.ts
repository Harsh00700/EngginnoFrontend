import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import { ContentComponent } from './content/content.component';
import { QualityRoutingModule } from './quality-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [QualityComponent, ContentComponent],
  imports: [
    CommonModule,
    QualityRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class QualityModule { }
