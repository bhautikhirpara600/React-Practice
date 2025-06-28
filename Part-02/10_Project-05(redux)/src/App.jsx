import { combineReducers, createStore } from "redux"
import cartReducer, { addCartProduct, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartProduct } from "./reducers/cartReducer"
import wishListReducer, { addWishListProduct, removeWishListProduct } from "./reducers/wishListReducer"
import productReducer from "./reducers/productReducer"

function App() {

  const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
  })

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  store.subscribe(() => {
    // console.log(store.getState());
  })


  store.dispatch(addCartProduct(5, 1))
  store.dispatch(addCartProduct(12, 1))
  store.dispatch(addCartProduct(19, 1))

  store.dispatch(removeCartProduct(12))

  store.dispatch(increaseCartItemQuantity(5))
  store.dispatch(increaseCartItemQuantity(5))
  store.dispatch(increaseCartItemQuantity(19))
  
  store.dispatch(decreaseCartItemQuantity(5))
  store.dispatch(decreaseCartItemQuantity(5))
  store.dispatch(decreaseCartItemQuantity(5))

  store.dispatch(addWishListProduct(6))
  store.dispatch(addWishListProduct(8))
  store.dispatch(addWishListProduct(7))

  store.dispatch(removeWishListProduct(8))

  return (
    <>
      <h1>React with Redux Core</h1>
    </>
  )
}

export default App
