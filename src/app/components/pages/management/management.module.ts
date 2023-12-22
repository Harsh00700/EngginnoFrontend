import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { ContentComponent } from './content/content.component';
import { ManagementRoutingModule } from './management-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ManagementComponent, ContentComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ManagementModule { }
