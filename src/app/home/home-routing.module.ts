import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DefaultComponent },
      { path: 'categories/:id/products', component: ProductListComponent },
      { path: 'products/:id', component: ProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
