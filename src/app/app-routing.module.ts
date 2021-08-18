import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsDisplayComponent } from './pages/products-display/products-display.component';

export enum routeName {
  products = '',
  cart = 'cart',
}

const routes: Routes = [
  {
    path: routeName.products,
    component: ProductsDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
