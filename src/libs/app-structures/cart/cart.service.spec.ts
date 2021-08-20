import { NgReduxModule } from '@angular-redux/store';
import { TestBed } from '@angular/core/testing';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';
import { Cart } from 'src/libs/data-structures/entities/cart/cart.entity';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [NgReduxModule] });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateCartArticles', () => {
    it('should return cart articles', () => {
      const testArticles: Article[] = [
        {
          id: 1,
          name: 'Name I am',
          description: 'Lorem Elsass',
          imageUrl: 'https://image.gif',
        },
        {
          id: 2,
          name: 'Name I am number 2',
          description: 'Lorem Elsass again',
          imageUrl: 'https://image.gif2',
        },
        {
          id: 3,
          name: 'Name I am number 3',
          description: 'Lorem Elsass again and again',
          imageUrl: 'https://image.gif3',
        },
      ];

      const result: Cart[] = service['generateCartArticles'](
        testArticles,
        [3, 2, 2]
      );

      expect(result).toEqual([
        { article: testArticles[1], value: 2 },
        { article: testArticles[2], value: 1 },
      ]);
      expect(service['generateCartArticles'](testArticles, [])).toEqual([]);
    });
  });
});
