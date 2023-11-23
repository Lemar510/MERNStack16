import React, {useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";//hooks for navigations
import { connect } from "react-redux";
import { signOut } from "../../state/User/UserAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";

function CartButton({ cartItems }) {
    const navigate = useNavigate();
    const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="cart-icon-container">
        <button onClick={() => navigate("/cart")} className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
        </div>
    );
}

let Header = (props) => {
    let userName = props.User ? props.User.userName : "Lemar";
    let isLoggedIn = userName && userName !== "";
    let navigate = useNavigate(); //hook - an inbuilt feature to navigate at other page
    const [redirected, setRedirected] = useState(false);
    
    useEffect(() => {
        if (isLoggedIn && !redirected) {
            navigate("/home");
            setRedirected(true);
        }
    }, [isLoggedIn, navigate, redirected]);

    let handleSignOut = () => {
        props.signOut();
        navigate("/home");
        toast.success("Signed out successfully!", {
            position: "top-center",
        });
    }

    return (
        <>
             Hi <b>{userName +", "}</b> Welcome to RashidTech's Shopping Cart.
             {userName == "" ?<b> Please sign in to see other features. </b>:""}
             
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
                {!isLoggedIn && <NavLink to="/hook" className="button" activeclassname="success">Sign in</NavLink>}
                {isLoggedIn && <NavLink to="/product" className="button" activeclassname="success">Product </NavLink>}
                {isLoggedIn && <NavLink to="/coupon" className="button" activeclassname="success">Coupon</NavLink>}
                {isLoggedIn && <NavLink to="/cart" className="button" activeclassname="success">Cart</NavLink>}
                {isLoggedIn && <NavLink to="/recentOrders" className="button" activeclassname="success">Recent Orders</NavLink>}
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
                { /*isLoggedIn && (<button onClick={handleSignOut}>Sign Out</button>) */}
                {isLoggedIn && <CartButton cartItems={props.cartItems} />}
            </div>
            <div className="sign-out-container">
                {isLoggedIn && (<button onClick={handleSignOut} className="sign-out-button">Sign Out</button>)} 
            </div>

            {/* <a href="/user" className="button" >User Anchor</a>
            <button onClick={goToAboutClick} >Go To About Page</button> */}
        </>
    )
}

let mapStateToProps = (store) => {
    return {
        User: store.userReducer ? store.userReducer.User : null,
        cartItems: store.cartReducer || [],
        //cartItems: store.cartReducer ? store.cartReducer.items : [],
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
//export default Header;

//<NavLink to="/hook" className="button" activeclassname="success" >User Hook </NavLink>