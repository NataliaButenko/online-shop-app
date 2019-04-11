import { axios } from "../../../index";
import { history } from "../../../components/main/main";
import { LOADING_TRUE, LOADING_FALSE } from "../loadingAction/loadingAction";

export const CHANGE_PRODUCT_LIST = 'changeProductList';

export const changeProductListAsync = (str) => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + str)
      .then(response => {
        dispatch({
          type: CHANGE_PRODUCT_LIST,
          payload: response.data
        });
        history.push('/home');
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
