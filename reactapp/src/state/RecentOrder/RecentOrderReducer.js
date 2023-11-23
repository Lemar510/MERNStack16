import * as ActionTypes from '../actionTypes';

const initialState = {
  orders: [],
  loading: false,
  error: null
};

const recentOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RecentOrders_Request:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ActionTypes.Fetch_RecentOrders_Success:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case ActionTypes.Fetch_RecentOrders_Failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ActionTypes.Cancel_Order_Success:
      const updatedOrders = state.orders.filter(order => order._id !== action.payload);
      return {
        ...state,
        orders: updatedOrders
      };
    case ActionTypes.Cancel_Order_Failure:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default recentOrderReducer;
