import { Reducer } from 'redux';
import { Article } from 'src/libs/data-structures/entities/articles/article.entity';

interface ArticlesAction {
  type: TypeArticlesAction;
  payload?: any;
}

export enum TypeArticlesAction {
  SET_ARTICLES = 'SET_ARTICLES',
}

export const articlesInitialState: Article[] = [];

export const articlesReducer: Reducer<Article[]> = (
  state: Article[] = articlesInitialState,
  action: ArticlesAction
) => {
  switch (action.type) {
    case TypeArticlesAction.SET_ARTICLES:
      return action.payload.articles;

    default:
      return state;
  }
};
