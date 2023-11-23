import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentOrders, cancelOrder } from '../../state/RecentOrder/RecentOrderAction';
import { reorderItems } from "../../state/Cart/CartAction";
import { useNavigate } from "react-router-dom";

const isWithinCancellationWindow = (dateTime) => {
  const now = new Date();
  const orderDate = new Date(dateTime);
  const withinWindow = (now.getTime() - orderDate.getTime()) < (2*24*60*60*1000); 
  console.log(`Order Date: ${orderDate.toString()}, Within Window: ${withinWindow}`);
  return withinWindow;
};

const RecentOrders = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userReducer.User._id);
  const recentOrders = useSelector(state => state.recentOrderReducer.orders);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(userId) {
      dispatch(fetchRecentOrders(userId));
    }
  }, [dispatch, userId]);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId, userId));
  };

  const handleReorder = (order) => {
    dispatch(reorderItems(order.order));
    navigate('/cart')
  };

  

  return (
    <div>
      <h2>Recent Orders</h2>
      {recentOrders.map(order => {
        console.log(`raw order datetime: ${order.dateTime}`);
        const formattedDate = new Date(order.dateTime).toLocaleString();
        console.log(`Order ID: ${order._id}, formatted date: ${formattedDate}`);
        return (
          <div key={order._id}>
            <div>Order ID: {order._id}</div>
            <div>Date: {formattedDate !== 'Invalid Date' ? formattedDate : 'Error parsing date'}</div>
            <button onClick={() => handleCancelOrder(order._id)} disabled={!isWithinCancellationWindow(order.dateTime)}>Cancel Order</button>
            <button onClick={() => handleReorder(order)}>Reorder</button>
          </div>
        )
      })}
    </div>
  );
};

export default RecentOrders;
