import { Reducer } from 'redux';

interface CartAction {
  type: TypeCartAction;
  payload?: any;
}

export enum TypeCartAction {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DELETE_ITEM_TO_CART = 'DELETE_ITEM_TO_CART',
}

export const cartInitialState: number[] = [];

export const cartReducer: Reducer<number[]> = (
  state: number[] = cartInitialState,
  action: CartAction
) => {
  switch (action.type) {
    case TypeCartAction.ADD_ITEM_TO_CART:
      state.push(action.payload.articleId);

      return state;

    case TypeCartAction.DELETE_ITEM_TO_CART:
      const indexToDelete: number = state.findIndex(
        (stateId) => stateId === action.payload.articleId
      );

      return indexToDelete !== undefined
        ? state.splice(indexToDelete, 1)
        : state;

    default:
      return state;
  }
};
