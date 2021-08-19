import { Component, Input } from '@angular/core';
import { CartStoreService } from 'src/libs/app-structures/cart/cart.store.service';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

@Component({
  selector: 'app-products-display-item',
  templateUrl: './products-display-item.component.html',
  styleUrls: ['./products-display-item.component.scss'],
})
export class ProductsDisplayItemComponent {
  @Input()
  article: Article;

  constructor(private readonly cartStore: CartStoreService) {}

  addArticleToCart(articleId: number): void {
    this.cartStore.addArticle(articleId);
  }
}
