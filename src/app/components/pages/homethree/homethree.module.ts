import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

import { HomethreeRoutingModule } from './homethree-routing.module';
import { HomethreeComponent } from './homethree.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [HomethreeComponent, ContentComponent],
  imports: [
    CommonModule,
    HomethreeRoutingModule,
    SlickCarouselModule,
    NgbModule,
    SharedModule,
    FormsModule
  ]
})
export class HomethreeModule { }
