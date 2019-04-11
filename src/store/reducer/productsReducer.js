import { SET_PRODUCTS } from "../actions/productsAction/setProducts";
import { CHANGE_PRODUCT_LIST } from "../actions/productsAction/changeProductList";

export const reducerProducts = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.payload
    }
    case CHANGE_PRODUCT_LIST: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};
