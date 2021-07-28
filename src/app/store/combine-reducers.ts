import { combineReducers, Reducer } from 'redux';
import { articlesReducer } from './reducers/articles.reducer';

export const rootReducer: Reducer = combineReducers({
  articles: articlesReducer,
});
