import { combineReducers, createStore } from "redux"
import productReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
import wishListReducer from "./slices/wishListSlice"

const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())