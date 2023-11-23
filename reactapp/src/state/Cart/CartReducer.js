//Defines the initial state for cart and also returns cart reducer with logic to create a new cart state.
import * as ActionTypes from "../actionTypes";

const Initial_Cart_State = []

export default function CartReducer (state = Initial_Cart_State, action) {
    console.log("Cart Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem

    switch (action.type) {
        case ActionTypes.addItem: {
            const existingItemIndex = state.findIndex(item => item._id === action.payload.item._id);
        
            if (existingItemIndex >= 0) {
                const newState = [...state];
                const existingItem = newState[existingItemIndex];
                newState[existingItemIndex] = {
                    ...existingItem,
                    qty: existingItem.qty + (action.payload.item.qty || 1),
                };
                return newState;
            } else {
                return [...state, { ...action.payload.item, qty: 1 }]; 
            }
        }
        
         //to select all the items except the one which we click to remove
        case ActionTypes.removeItem:
            return state.filter(item => item._id!=action.payload.id)        
        
        //update quantity of an item in cart
        case ActionTypes.updateItem:
            return state.map((item)=>{
                if (item._id == action.payload.id) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })

        //empty cart
        case ActionTypes.emptyCart:
            return [];

        case ActionTypes.Reorder_Items:
            return [...action.payload];
        
        default:
            return state;
    }
}


/*//Defines the initial state for cart and also returns cart reducer with logic to create a new cart state.
import * as ActionTypes from "../actionTypes";

const Initial_Cart_State = []

export default function CartReducer (state = Initial_Cart_State, action) {
    console.log("Cart Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem

    switch (action.type) {
        case ActionTypes.addItem:
            //checking for duplicate item with _id state=>list of products (cart list)
            let newState = state.filter(item => item._id != action.payload.item._id);
            return [...newState, action.payload.item];//creating a new state with new item
        
         //to select all the items except the one which we click to remove
        case ActionTypes.removeItem:
            return state.filter(item => item._id!=action.payload.id)        
        
        //update quantity of an item in cart
        case ActionTypes.updateItem:
            return state.map((item)=>{
                if (item._id == action.payload.id) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty} //...item means {name, desc, rating, qty, price}
                }
                return item;//for all other items in cart do not update anything
            })

        //empty cart
        case ActionTypes.emptyCart:
            return [];
        
        default:
            return state;
    }
}
 */