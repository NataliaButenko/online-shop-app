export const EMPTY_BASKET = 'empty_basket';

export const emptyBasket = () => {
  return {
    type: EMPTY_BASKET,
    payload: []
  }
};
