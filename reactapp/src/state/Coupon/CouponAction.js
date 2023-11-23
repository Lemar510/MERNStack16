import * as actionTypes from "../actionTypes";

export const GenerateCoupon = () => ({
    type: actionTypes.GenerateCoupon,
    payload: { code: code, value : 10}

}); 