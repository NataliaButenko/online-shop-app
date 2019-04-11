export const ADD_PRODUCR_TO_BASKET = 'add_product_to_basket';

export const addProductToBasket = (product, selectColor) => {
  return {
    type: ADD_PRODUCR_TO_BASKET,
    payload: { ...product, selectColor: selectColor, counter: 1 }
  }
};
