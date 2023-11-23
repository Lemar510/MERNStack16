import * as ActionTypes from '../actionTypes';

const isWithinCancellationWindow = (dateTime) => {
  const now = new Date();
  const orderDate = new Date(dateTime);
  return (now.getTime() - orderDate.getTime()) < (2 * 24 * 60 * 60 * 1000); 
};

export const fetchRecentOrders = (userId) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RecentOrders_Request }); 
 
    fetch(`http://localhost:9000/recentOrders/api/getRecentOrders/${userId}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: ActionTypes.Fetch_RecentOrders_Success, payload: data });
    })
    .catch(error => {
      dispatch({ type: ActionTypes.Fetch_RecentOrders_Failure, payload: error.message });
    });
  };
};

export const cancelOrder = (orderId, userId) => {
  return (dispatch, getState) => {
    const { orders: recentOrders } = getState().recentOrderReducer;
    const orderToCancel = recentOrders.find(order => order._id === orderId);

    if (orderToCancel && isWithinCancellationWindow(orderToCancel.dateTime)) {
      fetch(`http://localhost:9000/checkout/api/cancelOrder`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          dispatch({ type: ActionTypes.Cancel_Order_Success, payload: orderId });
          dispatch(fetchRecentOrders(userId)); 
        } else {
          dispatch({ type: ActionTypes.Cancel_Order_Failure, payload: data.message });
        }
      })
      .catch(error => {
        dispatch({ type: ActionTypes.Cancel_Order_Failure, payload: error.message });
      });
    } else {
      dispatch({ type: ActionTypes.Cancel_Order_Failure, payload: "Order cancellation window has passed." });
    }
  };
};
