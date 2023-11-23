import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../state/Cart/CartAction";
import { toast } from "react-toastify";

import iPhoneImage from "../../images/iPhone.png";
import appleWatchImage from "../../images/Apple Watch.png";
import macbookAirImage from "../../images/Macbook Air.png";
import macbookProImage from "../../images/Macbook Pro.png";

const productImages = {
    "iPhone 15 Pro": iPhoneImage,
    "Apple Watch": appleWatchImage,
    "Macbook Air": macbookAirImage,
    "Macbook Pro": macbookProImage,
};

const ProductItemComponent = ({ product }) => {
    const dispatchToAddProduct = useDispatch();
    const couponValue = useSelector(state => state.couponReducer.couponValue);

    const addProductToCart = () => {
        dispatchToAddProduct(addItemToCart({ ...product, qty: 1}));
        toast.success(`${product.name} added to cart!`, {
            position: "bottom-left",
        });
    }

    const productImage = productImages[product.name] || productImages['default'];
    const price = couponValue ? product.price * (1-couponValue / 100) : product.price;

    return (
        <div className="product-card">
            <img src={productImage} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <div className="price">${price.toFixed(2)}</div>
            <button className="btn btn-primary" onClick={() => addProductToCart(product)}>Add To Cart</button>
        </div>
    );
}

export default ProductItemComponent;

/*import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../../state/Cart/CartAction";


let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart(product))
    }

    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 

                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                </ul>
                : 
                " "} 
            </li>
        </ul>
    )

}

export default ProductItemComponent; */