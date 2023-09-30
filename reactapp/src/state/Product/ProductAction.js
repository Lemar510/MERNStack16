import * as ActionTypes from "../actionTypes";
import axios from "axios";

export const addProductToStore = (newProduct)=>{
    return {
        type: ActionTypes.addProductToStore,
        payload: newProduct
    }
}

export const saveProductToDb = (product)=>{
    return (dispatch)=> {
        axios.post("http://localhost:9000/product/api/add", product)
            .then((response) => {
                let savedProduct = response.data;
                console.log(savedProduct);
                dispatch(addProductToStore(savedProduct)); 
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
