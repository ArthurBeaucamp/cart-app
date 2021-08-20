import { Injectable } from '@angular/core';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';
import { Cart } from 'src/libs/data-structures/entities/cart/cart.entity';
import { ArticlesStoreService } from '../articles/articles.store.service';
import { CartStoreService } from './cart.store.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private readonly articleStore: ArticlesStoreService,
    private readonly cartStore: CartStoreService
  ) {}

  getCartArticles(): Cart[] {
    const articles: Article[] = this.articleStore.getArticles();
    const cart: number[] = this.cartStore.getCart();

    return this.generateCartArticles(articles, cart);
  }

  private generateCartArticles(articles: Article[], cart: number[]): Cart[] {
    let cartArticles: Cart[] = [];

    cart.forEach((indexToCard: number) => {
      const articleToAddIndex: number = cartArticles.findIndex(
        (cartArticle: Cart) => cartArticle.article.id === indexToCard
      );

      if (articleToAddIndex !== -1) {
        cartArticles[articleToAddIndex].value++;
      } else {
        cartArticles.push({
          article: articles.find(
            (article: Article) => article.id === indexToCard
          ) as Article,
          value: 1,
        });
      }
    });

    return cartArticles.sort((a, b) => {
      return a.article.id - b.article.id;
    });
  }
}
