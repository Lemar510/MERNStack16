import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenerateCoupon } from "../../state/Coupon/CouponAction"

function CouponComponent() {
    const dispatch = useDispatch();
    const couponValue = useSelector(state => state.couponReducer.couponValue); 
  
    const handleGenerateCoupon = () => {
      const newCouponCode = Math.floor(100000 + Math.random() * 900000); // this generates a random 6 digit number
      dispatch({ type: GenerateCoupon, payload: newCouponCode });
    };
  
    return (
      <div>
        <button onClick={handleGenerateCoupon}>Generate Coupon</button>
        <p>Coupon: {couponValue}</p>
      </div>
    );
  }
  
  export default CouponComponent; 