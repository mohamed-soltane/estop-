import {createStore} from "redux";
import cartReducer from "./reducers/index";

const initialState = {
    cart: [
        {
            product:  {
                "id":1,
                "name": "aaaa",
                "price": 100,
                "image":"/images/1.jpg",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            },
            quantity: 4
        }
    ]
};



const store = createStore(cartReducer, initialState);

export default store;