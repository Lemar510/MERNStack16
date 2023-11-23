 import * as ActionTypes from "../actionTypes";

const Initial_Checkout_State = {
    success: false,
    errorMsg: ""
}

export default function CheckoutReducer(state = Initial_Checkout_State, action) {
    console.log("Checkout Reducer", state, action);

    switch (action.type) {
        case ActionTypes.Checkout_Success:
            return {
                ...state,
                success: true,
                errorMsg: ""
            };
        
        case ActionTypes.Checkout_Failure:
            return {
                ...state,
                success: false,
                errorMsg: action.payload
            };

        default:
            return state;
    }
}
