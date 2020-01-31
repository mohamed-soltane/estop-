import { ADD_TO_CART } from "../Actions/types";

export default function cartReducer(state, action){
    switch(action.type){
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                    product: action.productInfo,
                    quantity: action.quantity
                    }
                ]
            }
        }
        default: 
        return state;
    }
}
