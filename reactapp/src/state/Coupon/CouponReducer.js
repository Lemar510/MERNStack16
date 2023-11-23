import * as actionTypes from "../actionTypes";

const initialState = {
    Coupon: {
        code: "",
        value: 0
    },
};

let couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GenerateCoupon:
            return { ...state, Coupon: action.payload};
        default:
            return state;
    }
};

export default couponReducer; 