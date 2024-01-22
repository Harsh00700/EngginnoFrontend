import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ProductsingleRoutingModule } from './productsingle-routing.module';
import { ProductsingleComponent } from './productsingle.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsingleComponent, ContentComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    ProductsingleRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductsingleModule { }
