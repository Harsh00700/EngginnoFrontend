import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ContentComponent } from './content/content.component';
import { EventsRoutingModule } from './events-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [EventsComponent, ContentComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class EventsModule { }
