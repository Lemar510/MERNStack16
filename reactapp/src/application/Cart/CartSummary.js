import React from "react";

const CartSummaryComponent = (props) => {
    let {
        count = 0,
        amount = 0
    } = props.data || {};

    return (
        <div>
            {props.readOnly ? <h5> Cart Summary </h5> : <h2> Cart Summary </h2>}
            <div className="mt-2">
                <strong>Subtotal:</strong> <span>${amount}</span>
            </div>
            <div className="mt-2">
                <strong>Products Count:</strong> <span>{count}</span>
            </div>
        </div>
    )
}

export default CartSummaryComponent;