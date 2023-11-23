import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiateCheckout } from '../../state/Checkout/CheckoutAction';
import CartSummary from "../Cart/CartSummary";
import { emptyCart } from '../../state/actionTypes';

let Checkout = () => {
    let dispatch = useDispatch();
    let user = useSelector((store) => store.userReducer.User);
    let cartItems = useSelector((store) => store.cartReducer);
    let [showPaymentMessage, setShowPaymentMessage] = useState(false);
    let [showSpinner, setShowSpinner] = useState(false);

    let handleMakePayment = () => {
        setShowSpinner(true);

        dispatch(initiateCheckout(cartItems, user._id))
            .then(() => {
                setShowSpinner(false);
                setShowPaymentMessage(true);
                dispatch({ type: emptyCart })
            })
            .catch((err) => {
                console.log("Error during checkout", err);
                setShowSpinner(false);
                setShowPaymentMessage(false);
            });

        setTimeout(() => {
            setShowPaymentMessage(false)
        }, 10000);
    };

    let cartItemCount = cartItems.reduce((total, currentItem) => {
        return total + currentItem.qty
    }, 0);

    let cartTotalAmount = cartItems.reduce((total, currentItem) => {
        return total + (currentItem.price * currentItem.qty);
    }, 0);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 m-2">
                    {!showPaymentMessage && (
                        <div className="row justify-content-between border-bottom border-3 mb-3">
                            <p className="h1 col-md-4">Checkout Page</p>
                        </div>
                    )}

                    {user._id === "" ? (
                        <div className="row">
                            <p>Please log in to your account to view your cart.</p>
                        </div>
                    ) : !showSpinner && !showPaymentMessage ? (
                        <>
                            <div className="row mb-3">
                                <h2>User Details</h2>
                                <div className="col-md-12 mt-2">
                                    <strong>Name:</strong> <span>{user.userName}</span>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <strong>Email:</strong> <span>{user.email}</span>
                                </div>
                            </div>

                            {cartItems?.length === 0 ? (
                                <p>Your cart is empty. Please add items to your cart before proceeding further.</p>
                            ) : (
                                <>
                                    <div className="row mb-3">
                                        <CartSummary data={{ count: cartItemCount, amount: cartTotalAmount }} />
                                    </div>
                                    <button className="btn btn-success" onClick={handleMakePayment}>Proceed to Payment</button>
                                </>
                            )}
                        </>
                    ) : showSpinner && !showPaymentMessage ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="row justify-content-between">
                            <p className="h1">Payment Successful!</p>
                            <p>Thank you for the payment, your order is being processed!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default Checkout;

/*import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartComponent from "../Cart/CartComponent";
import CartSummary from "../Cart/CartSummary";

let Checkout = () => {
    let user = useSelector((store) => store.userReducer.User);
    let cartItems = useSelector((store) => store.cartReducer.cartItems);
    let [showPaymentMessage, setShowPaymentMessage] = useState(false);
    let [showSpinner, setShowSpinner] = useState(false);

    let handleMakePayment = () => {
        setShowSpinner(true);

        setTimeout(() => {
            setShowSpinner(false);
            setShowPaymentMessage(true);
        }, 2000);

        setTimeout(() => {
            setShowPaymentMessage(false)
        }, 10000);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 m-2">
                    {!showPaymentMessage && (
                        <div className="row justify-content-between border-bottom border-3 mb-3">
                            <p className="h1 col-md-4">Checkout Page</p>
                        </div>
                    )}

                    {user._id === "" ? (
                        <div className="row">
                            <p>Please log in to your account to view your cart.</p>
                        </div>
                    ) : !showSpinner && !showPaymentMessage ? (
                        <>
                            <div className="row">
                                <h2>User Details</h2>
                                <p>Name: {user.firstName}</p>
                                <p>Email: {user.email}</p>
                            </div>
                            {cartItems?.length === 0 ? (
                                <p>Your cart is empty. Please add items to your cart before proceeding further.</p>
                            ) : (
                                <>
                                    <CartComponent />
                                    <CartSummary />
                                    <div className="row">
                                        <button className="btn btn-success" onClick={handleMakePayment}>
                                            Proceed to Payment
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    ) : showSpinner && !showPaymentMessage ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="row justify-content-between">
                            <p className="h1">Payment Successful!</p>
                            <p>Thank you for the payment, your order is being processed!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Checkout;

 */