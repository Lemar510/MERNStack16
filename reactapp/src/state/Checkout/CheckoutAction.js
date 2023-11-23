import * as ActionTypes from "../actionTypes";

export const initiateCheckout = (cart, userid) => {
    console.log("Initiating Checkout with cart items", cart); 
    return function(dispatch) {
        return window.fetch("http://localhost:9000/checkout/api/processCheckout",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userid, cartItems: cart})})
        .then(response => response.json())
        .then(checkoutResponse => {
            console.log("Checkout response: ", checkoutResponse);
            if (checkoutResponse.success) {
                dispatch(checkoutSuccess());
            } else {
                dispatch(checkoutFailure(checkoutResponse.message));
            }
        })
        .catch((err) => {
            console.log("Error during checkout", err);
            dispatch(checkoutFailure("Checkout failed due to technical error."));
        }) 
    }
}

export const checkoutSuccess = () => ({
    type: ActionTypes.Checkout_Success
});

export const checkoutFailure = (errorMsg) => ({
    type: ActionTypes.Checkout_Failure,
    payload: errorMsg
});

/*import * as ActionTypes from "../actionTypes";

export const initiateCheckout = (cart, userid) => {
    console.log("Initiating Checkout with cart items", cart); 
    return function(dispatch) {
        return window.fetch("http://localhost:9000/checkout/api/initiate",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userid, cart: cart})})
        .then(response => response.json())
        .then(checkoutResponse => {
            console.log("Checkout response: ", checkoutResponse);
            if (checkoutResponse.success) {
                dispatch(checkoutSuccess());
            } else {
                dispatch(checkoutFailure(checkoutResponse.message));
            }
        })
        .catch((err) => {
            console.log("Error during checkout", err);
            dispatch(checkoutFailure("Checkout failed due to technical error."));
        }) 
    }
}

export const checkoutSuccess = () => ({
    type: ActionTypes.Checkout_Success
});

export const checkoutFailure = (errorMsg) => ({
    type: ActionTypes.Checkout_Failure,
    payload: errorMsg
});

 */