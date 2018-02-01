import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DefaultComponent } from './default/default.component';
import { ProductResolver } from './product/product-resolver.service';
import { ProductListResolver } from './product-list/product-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      }, {
        path: 'categories/:id/products',
        component: ProductListComponent,
        resolve: {
          products: ProductListResolver
        }
      }, {
        path: 'products/:id',
        component: ProductComponent,
        resolve: {
          product: ProductResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductResolver, ProductListResolver]
})
export class HomeRoutingModule { }
