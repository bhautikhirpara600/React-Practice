import { combineReducers, createStore } from "redux"
import cartReducer, { CART_ADD_PRODUCT, CART_DECREASE_ITEM_QUANTITY, CART_INCREASE_ITEM_QUANTITY, CART_REMOVE_PRODUCT } from "./reducers/cartReducer"
import wishListReducer, { WISHLIST_ADD_PRODUCT, WISHLIST_REMOVE_PRODUCT } from "./reducers/wishListReducer"
import productReducer from "./reducers/productReducer"

function App() {

  const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
  })

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  console.log(store);

  store.subscribe(() => {
    // console.log(store.getState());
  })


  store.dispatch({ type: CART_ADD_PRODUCT, payload: { productId: 5, quantity: 1 } })
  store.dispatch({ type: CART_ADD_PRODUCT, payload: { productId: 12, quantity: 1 } })
  store.dispatch({ type: CART_ADD_PRODUCT, payload: { productId: 19, quantity: 1 } })
  store.dispatch({ type: CART_REMOVE_PRODUCT, payload: { productId: 12 } })
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 5 } })
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 5 } })
  store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 19 } })
  store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 5 } })
  store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 5 } })
  store.dispatch({ type: WISHLIST_ADD_PRODUCT, payload: { productId: 6 } })
  store.dispatch({ type: WISHLIST_ADD_PRODUCT, payload: { productId: 8 } })
  store.dispatch({ type: WISHLIST_ADD_PRODUCT, payload: { productId: 7 } })
  store.dispatch({ type: WISHLIST_REMOVE_PRODUCT, payload: { productId: 8 } })

  return (
    <>
      <h1>React with Redux Core</h1>
    </>
  )
}

export default App
