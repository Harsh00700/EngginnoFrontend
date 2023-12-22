import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { CareersRoutingModule } from './careers-routing.module';

@NgModule({
  declarations: [CareersComponent, ContentComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class CareersModule { }
