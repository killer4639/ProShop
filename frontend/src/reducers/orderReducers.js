import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_FAIL,
  ORDER_LIST_RESET,
  ORDER_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
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

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loadiing: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loadiing: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loadiing: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loadiing: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loadiing: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loadiing: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default: {
      return state;
    }
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loadiing: true,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        loadiing: false,
        orders: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loadiing: false,
        error: action.paylaod,
      };
    case ORDER_LIST_MY_RESET:
      return { orders: [] };
    default: {
      return state;
    }
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loadiing: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loadiing: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loadiing: false,
        error: action.paylaod,
      };
    case ORDER_LIST_RESET:
      return { orders: [] };
    default: {
      return state;
    }
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loadiing: true,
      };
    case ORDER_DELIVER_SUCCESS:
      return {
        loadiing: false,
        success: true,
      };
    case ORDER_DELIVER_FAIL:
      return {
        loadiing: false,
        error: action.paylaod,
      };
    case ORDER_DELIVER_RESET:
      return { orders: [] };
    default: {
      return state;
    }
  }
};
