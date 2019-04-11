import { LOADING_FALSE, LOADING_TRUE } from "../loadingAction/loadingAction";
import { axios } from "../../../index";

export const SET_SALE_PRODUCTS = 'set_sale_product';

export const setSalesProductsAsync = (brand) => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + brand)
      .then(response => {
        dispatch({
          type: SET_SALE_PRODUCTS,
          payload: response.data
        });
      })
      .catch(error => console.log(' -----error ', error))
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  }
};
