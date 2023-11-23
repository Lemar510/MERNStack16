//This file will have all of the action types to be used in various actions and reducers.

export const AddUserToStore = "USER.ADDUSERTOSTORE";

export const Sign_Out = "USER.SIGN_OUT";

//Product Action Types
export const addProductsToStore = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const fetchProductsFulfilled = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const fetchProductsRejected = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//Cart Action Types
export const addItem = "CART.ADD_ITEM";
export const removeItem = "CART.REMOVE_ITEM";
export const updateItem = "CART.UPDATE_ITEM";
export const emptyCart = "CART.EMPTY_CART";

//Checkout Action Types
export const Initiate_Checkout = "CHECKOUT.INITIATE";            
export const Checkout_Success = "CHECKOUT.SUCCESS";              
export const Checkout_Failure = "CHECKOUT.FAILURE";     

//Coupon Action Types
export const GenerateCoupon = 'COUPON.GENERATECOUPON';

//RecentOrder Action Types
export const RecentOrders_Request = "RECENT_ORDERS_REQUEST";
export const Fetch_RecentOrders_Success = "FETCH_RECENT_ORDERS_SUCCESS";
export const Fetch_RecentOrders_Failure = "FETCH_RECENT_ORDERS_FAILURE";
export const Cancel_Order_Success = "CANCEL_ORDER_SUCCESS";
export const Cancel_Order_Failure = "CANCEL_ORDER_FAILURE";

//Reorder Action Types
export const Reorder_Items = "CART.REORDER_ITEMS";
