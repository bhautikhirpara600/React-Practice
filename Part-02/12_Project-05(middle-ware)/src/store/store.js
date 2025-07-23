import productReducer from "./slices/productSlice"
import cartReducer from "./slices/cartSlice"
import wishListReducer from "./slices/wishListSlice"
import { configureStore } from "@reduxjs/toolkit"
import { logger } from "./middleware/logger"


export const store = configureStore({
    reducer: {
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
},
middleware: (defaultMiddleware) => [...defaultMiddleware()]
})