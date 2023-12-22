import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitmentComponent } from './commitment.component';
import { ContentComponent } from './content/content.component';
import { CommitmentRoutingModule } from './commitment-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CommitmentComponent, ContentComponent],
  imports: [
    CommonModule,
    CommitmentRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class CommitmentModule { }
