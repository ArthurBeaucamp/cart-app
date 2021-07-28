import { Article } from 'src/libs/data-structures/entities/articles/article.entity';
import { articlesInitialState } from './reducers/articles.reducer';

export interface appState {
  articles: Article[];
}

export const initialState: appState = {
  articles: articlesInitialState,
};
