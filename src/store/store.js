import {createStore} from "redux";

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


function reducers(state){
    return state;
}

const store = createStore(reducers, initialState);

export default store;