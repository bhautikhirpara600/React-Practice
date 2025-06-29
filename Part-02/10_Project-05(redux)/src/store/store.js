import { combineReducers, createStore } from "redux"
import productReducer from "./reducers/productReducer"
import cartReducer from "./reducers/cartReducer"
import wishListReducer from "./reducers/wishListReducer"

const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())