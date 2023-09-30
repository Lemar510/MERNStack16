import * as ActionTypes from "../actionTypes";

const Initial_Product_State = {
    product : {
        name: "iPhone",
        price: "1000",
        desc: "A brand new iPhone with an innovative new design features back glass that has color infused throughout the material.",
        rating: "6"
    }
}

let ProductReducer = (state = Initial_Product_State, action)=>{
    switch (action.type) {
        case ActionTypes.addProductToStore:
            return {...state, product: action.payload};
        default:
            return state;
    }
}

export default ProductReducer;