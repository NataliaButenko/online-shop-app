import { LOADING_TRUE } from "../actions/loadingAction/loadingAction";
import { LOADING_FALSE } from "../actions/loadingAction/loadingAction";

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE: {
      return action.payload
    }
    case LOADING_FALSE: {
      return action.payload
    }
    default: {
      return state
    }
  }
};
