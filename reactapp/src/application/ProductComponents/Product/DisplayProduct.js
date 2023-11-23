import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../state/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";

let DisplayProduct = (props) => {

    let products = useSelector((state) => state.productReducer.products);
    let dispatchToFetchProducts = useDispatch();

    useEffect(() => {
        if (products.length === 0) {
            dispatchToFetchProducts(fetchProducts());
        }
    }, [products.length, dispatchToFetchProducts]);

    return (
        <div className="product-grid">
            {
                products.length > 0 ? 
                    products.map((product) => {
                        return (
                            <ProductItemComponent
                                key={product.id}
                                product={product}
                            />
                        );
                    })
                : <h2>No Products To Show</h2>
            }
        </div>
    );
}

export default DisplayProduct;

/*import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../state/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";

let DisplayProduct = (props)=>{

    let products = useSelector((state)=>state.productReducer.products);
    let dispatchToFetchProducts = useDispatch();

    useEffect(()=>{
        products && products.length == 0 ? dispatchToFetchProducts(fetchProducts()) : ""
    },
    [])

    return(
        <>
            {
                products && products.length >= 1 ? 
                    products.map((product)=>{
                        return <ProductItemComponent product={product} />
                    })

                :<h2>No Products To Show</h2>
            }
        </>
    )
}

export default DisplayProduct; */