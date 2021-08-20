import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsDisplayComponent } from './pages/products-display/products-display.component';

export enum routeName {
  products = 'product',
  cart = 'cart',
}

const routes: Routes = [
  { path: '', redirectTo: routeName.products, pathMatch: 'full' },
  {
    path: routeName.products,
    component: ProductsDisplayComponent,
  },
  {
    path: routeName.cart,
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
