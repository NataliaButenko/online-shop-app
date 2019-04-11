import { combineReducers } from 'redux'
import { reducerProducts } from "./productsReducer";
import { reducerSearch } from "./searchReducer";
import { basketReducer } from "./basketReducer";
import { loadingReducer } from "./loaderReducer";
import { salesProductReducer } from "./salesProductsReducer";

const rootReducer =combineReducers({

  products: reducerProducts,
  search: reducerSearch,
  basket: basketReducer,
  loading: loadingReducer,
  sale: salesProductReducer

});

export default rootReducer;
