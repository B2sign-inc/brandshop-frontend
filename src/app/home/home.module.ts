import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { DefaultComponent } from './default/default.component';

import { MatListModule, MatCardModule } from '@angular/material';
import { CategoryService, ProductService } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,

    MatListModule,
    MatCardModule,
  ],
  providers: [
    CategoryService,
    ProductService,
  ],
  declarations: [HomeComponent, CategoryComponent, ProductListComponent, ProductComponent, DefaultComponent]
})
export class HomeModule { }
