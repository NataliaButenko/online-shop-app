import { SET_SALE_PRODUCTS } from "../actions/salesAction/setSalesProducts";

export const salesProductReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SALE_PRODUCTS: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};
