import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { TypeCartAction } from 'src/app/store/reducers/cart.reducer';
import { appState } from 'src/app/store/store';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {
  constructor(private readonly ngRedux: NgRedux<appState>) {}

  addArticle(articleId: number) {
    this.ngRedux.dispatch({
      type: TypeCartAction.ADD_ITEM_TO_CART,
      payload: { articleId },
    });
  }

  deleteArticle(articleId: number) {
    this.ngRedux.dispatch({
      type: TypeCartAction.DELETE_ITEM_TO_CART,
      payload: { articleId },
    });
  }
}
