import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachiningComponent } from './machining.component';
import { ContentComponent } from './content/content.component';
import { MachiningRoutingModule } from './machining-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MachiningComponent, ContentComponent],
  imports: [
    CommonModule,
    MachiningRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class MachiningModule { }
