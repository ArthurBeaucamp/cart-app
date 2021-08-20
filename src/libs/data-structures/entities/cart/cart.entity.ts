import { Article } from '../articles/article.entity';

export interface Cart {
  article: Article;
  value: number;
}
