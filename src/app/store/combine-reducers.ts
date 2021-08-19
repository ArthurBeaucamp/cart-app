import { combineReducers, Reducer } from 'redux';
import { articlesReducer } from './reducers/articles.reducer';
import { cartReducer } from './reducers/cart.reducer';

export const rootReducer: Reducer = combineReducers({
  articles: articlesReducer,
  cart: cartReducer,
});
