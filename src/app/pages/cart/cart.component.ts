import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/libs/app-structures/cart/cart.service';
import { CartStoreService } from 'src/libs/app-structures/cart/cart.store.service';
import { Cart } from 'src/libs/data-structures/entities/cart/cart.entity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartArticles: Cart[];

  constructor(
    private readonly cartService: CartService,
    private readonly cartStore: CartStoreService
  ) {}

  ngOnInit(): void {
    this.getCartArticles();
  }

  getCartArticles(): void {
    this.cartArticles = this.cartService.getCartArticles();
  }

  removeArticleToCart(articleId: number): void {
    console.log(articleId);

    this.cartStore.deleteArticle(articleId);
    this.getCartArticles();
  }
}
