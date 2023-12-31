import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ShopthreeRoutingModule } from './shopthree-routing.module';
import { ShopthreeComponent } from './shopthree.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [ShopthreeComponent, ContentComponent],
  imports: [
    CommonModule,
    ShopthreeRoutingModule,
    NgbModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ShopthreeModule { }
