import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
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



const store = createStore(cartReducer, initialState,compose( 
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));

export default store;