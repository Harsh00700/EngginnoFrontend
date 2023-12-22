import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch.component';
import { ContentComponent } from './content/content.component';
import { DispatchRoutingModule } from './dispatch-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DispatchComponent, ContentComponent],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class DispatchModule { }
