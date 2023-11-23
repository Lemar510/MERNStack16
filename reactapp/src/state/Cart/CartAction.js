import * as ActionTypes from "../actionTypes";

export const addItemToCart = (item)=>({
    type: ActionTypes.addItem,
    payload: {item} //{item:item}
})

export const emptyTheCart = () => ({
    type: ActionTypes.emptyCart
});

export const removeItem = (id) => ({
    type: ActionTypes.removeItem,
    payload: { id }
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.updateItem,
    payload: {
        id, 
        qty: parseInt(qty) 
    }
});

export const reorderItems = (items) => ({
    type: ActionTypes.Reorder_Items,
    payload: items 
})

export const saveCartToDb = (cart, userid)=>{

    console.log("Items To Be Saved", cart); 
    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9000/cart/api/saveUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response ", usercartresponse);
            //dispatch(loading(false));
        })
        .catch((err)=>{
            //dispatch(loading(false));
            console.log("Error While Saving Cart", err);
        }) 
    }
}


export const getUserCart = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9000/cart/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response - get user cart ", usercartresponse);
            
            dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 
            
            for (const item of usercartresponse.cart) {
                console.log("item in for of", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }                
                       
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}