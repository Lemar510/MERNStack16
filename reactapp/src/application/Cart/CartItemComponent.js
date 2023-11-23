import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../state/Cart/CartAction";
import { toast } from "react-toastify";

let CartItemComponent = (props) => {
    let item = props.item;
    let [quantity, setQuantity] = useState(item.qty);
    let dispatchItem = useDispatch();

    let removingItem = () => {
        dispatchItem(removeItem(item._id));
        toast.success("Item removed successfully!", {
            position: "bottom-left",
        });
    };

    let updatingItem = (newQuantity) => {
        setQuantity(newQuantity);
        dispatchItem(updateItem(item._id, newQuantity));
    };

    return (
        <div className="cart-item">
            <div className="product-info">
                <img src={item.image} alt={item.name} className="product-image" />
                <div>
                    <div>{item.name}</div>
                    <div>{item.desc}</div>
                    <button onClick={removingItem} className="remove-item">Remove</button>
                </div>
            </div>
            <div className="product-price">${item.price}</div>
            <div className="product-quantity">
                <button onClick={() => updatingItem(quantity - 1)} disabled={quantity <= 1}>-</button>
                <input type="number" value={quantity} onChange={(evt) => updatingItem(evt.target.value)} />
                <button onClick={() => updatingItem(quantity + 1)}>+</button>
            </div>
            <div className="product-total">
                ${quantity * item.price}
            </div>
        </div>
    );
};

export default CartItemComponent;


/*import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../state/Cart/CartAction";
import { toast } from "react-toastify";

let CartItemComponent = (props)=>{
    let item = props.item;
    let [Quantity, setQuantity] = useState(item.qty)
    let dispatchItem = useDispatch();

    const removingItem = () => {
        dispatchItem(removeItem(item._id));
        toast.success("Item removed successfully!", {
            position: "bottom-left",
        });
    };

    return(
        <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.desc}</td>
            <td>
            {
                props.readOnly ? Quantity : 
                <input type="text" value={Quantity} onChange={(evt)=>{setQuantity(evt.target.value)}}></input>    
            }</td>
            <td>${item.qty*item.price}</td>
            {
                props.readOnly ?  "" : 
                    <Fragment>
                        <td><button onClick={removingItem}>Remove</button> </td>
                        <td><button onClick={() => dispatchItem(updateItem(item._id, Quantity))}>Edit</button></td>
                    </Fragment>
            }
        </tr>
    )
}

export default CartItemComponent; */