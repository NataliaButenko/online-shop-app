import { axios } from "../../../index";
import { LOADING_TRUE, LOADING_FALSE } from "../loadingAction/loadingAction";

export const SET_PRODUCTS = 'setProducts';

export const setProductsAsync = () => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow')
      .then(response => {
        dispatch({
          type: SET_PRODUCTS,
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
