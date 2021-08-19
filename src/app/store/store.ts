import { Article } from 'src/libs/data-structures/entities/articles/article.entity';
import { articlesInitialState } from './reducers/articles.reducer';
import { cartInitialState } from './reducers/cart.reducer';

export interface appState {
  articles: Article[];
  cart: number[];
}

export const initialState: appState = {
  articles: articlesInitialState,
  cart: cartInitialState,
};
