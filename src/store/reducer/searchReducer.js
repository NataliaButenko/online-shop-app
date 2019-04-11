import { SEARCH } from "../actions/productsAction/searchProducts";

export const reducerSearch = (state = '', action) => {
  switch (action.type) {
    case SEARCH: {
      return action.payload
    }
    default: {
      return state
    }
  }
};
