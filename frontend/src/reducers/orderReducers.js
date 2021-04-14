import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constans/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loadiing: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loadiing: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loadiing: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
