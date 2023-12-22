import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureComponent } from './infrastructure.component';
import { ContentComponent } from './content/content.component';
import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InfrastructureComponent, ContentComponent],
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class InfrastructureModule { }
