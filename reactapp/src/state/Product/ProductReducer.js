import * as ActionTypes from "../actionTypes";
import iPhoneImage from "../../application/images/iPhone.png";
import appleWatchImage from "../../application/images/Apple Watch.png";
import macbookAirImage from "../../application/images/Macbook Air.png";
import macbookProImage from "../../application/images/Macbook Pro.png";

const initialProducts = [
    {
        _id: 1,
        name: "iPhone 15 Pro",
        price: 999.0,
        desc: "6.5-inch display",       
        image: iPhoneImage
    },
    {
        _id: 2,
        name: "Apple Watch",
        price: 399.0,
        desc: "Brighter, Light, and Always-On display with a durable front crystal",
        image: appleWatchImage
    },
    {
        _id: 3,
        name: "Macbook Air",
        price: 749.0,
        desc: "13-inch with a brand new M2 chip",
        image: macbookAirImage
    },
    {
        _id: 4,
        name: "Macbook Pro",
        price: 1299.0,
        desc: "13-inch with a brand new M3 chip",
        image: macbookProImage
    },
];

let Initial_Product_State = {
    products: initialProducts,
    defaultProduct : {
        name: "Product Name",
        price: 1,
        desc: "Product Description",
       // rating: "Product Rating",
        image: ""
    }
}

export default function ProductReducer (state = Initial_Product_State, action) {
    switch (action.type) {
        case ActionTypes.addProductsToStore:
            return {...state, products: action.payload.products};
        default:
            return state;
    }
} 

/*import * as ActionTypes from "../actionTypes";

let Initial_Product_State = {
    products: [],
    defaultProduct : {
        name: "Product Name",
        price: 1,
        desc: "Product Description",
        rating: "Product Rating",
    }
}

export default function ProductReducer (state = Initial_Product_State, action) {
    switch (action.type) {
        case ActionTypes.addProductsToStore:
            return {...state, products: action.payload.products};
        default:
            return state;
    }
} */
