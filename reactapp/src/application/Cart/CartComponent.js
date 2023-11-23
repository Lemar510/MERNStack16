import React, { Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb, emptyTheCart } from "../../state/Cart/CartAction";
import { toast } from "react-toastify";

let CartComponent = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer)//reading cart data from store
    let user = useSelector((state)=>state.userReducer.User)
    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let dispatch = useDispatch()

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!")
        }else{
            dispatch(saveCartToDb(cart, userId))  
        }
        toast.success("Cart saved successfully!", {
            position: "bottom-left",
        });
    }

    let clickToEmptyCart = () => {
        dispatch(emptyTheCart());
        toast.success("Cart has cleared successfully!", {
            position: "bottom-left",
        });
    } 

    let navigate = useNavigate();
    let func = (evt)=>{
        navigate('/checkout');
        evt.preventDefault();
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartList && cartList.length > 0 ? (
                <Fragment>
                    <div className="cart-items">
                        {cartList.map(item => (
                            <CartItemComponent item={item} key={item._id} />
                        ))}
                    </div>
                    <CartSummary data={recalculate(cartList)} />
                    <div className="cart-actions">
                        {!props.readOnly && (
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, user._id)}>
                                    Save Cart
                                </button>
                                <button onClick={() => clickToEmptyCart(cartList, user._id)}>
                                    Empty Cart
                                </button>
                                <button className="checkout-button" onClick={func}>
                                    Check out
                                </button>
                            </Fragment>
                        )}
                        <button className="continue-shopping" onClick={() => navigate('/product')}>
                            Continue Shopping
                        </button>
                    </div>
                </Fragment>
            ) : (
                <h2>Your cart is currently empty</h2>
            )}
        </div>
    );
};

export default CartComponent;

/*import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../state/Cart/CartAction";
import { toast } from "react-toastify";

let CartComponent = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer)//reading cart data from store
    let user = useSelector((state)=>state.userReducer.User)
    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let dispatchToSaveCart = useDispatch()

    let clickToSaveCart = (cart, userId)=>{
        if(!userId){
            alert("Please sign in to save the cart!")
        }else{
            dispatchToSaveCart(saveCartToDb(cart, userId))  
        }
        toast.success("Cart saved successfully!", {
            position: "bottom-left",
        });
    }

    let navigate = useNavigate();
    let func = (evt)=>{
        navigate('/checkout');
        evt.preventDefault();
    }

    return(
        <>
            <h1>Cart Component</h1>

            {
                cartList && cartList.length >= 1 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : //by default false as boolean default is false
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                    //return item.name
                                    return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id}/>
                                })
                            } 
                        </tbody>
                    </table>

                    <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />

                    {
                        props.readOnly ? <></> : 
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                                        Save Cart
                                </button>
                                
                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </>
                : 
                <h2>Your cart is currently empty</h2>
            }

        </>
    )
}

export default CartComponent;


 */
