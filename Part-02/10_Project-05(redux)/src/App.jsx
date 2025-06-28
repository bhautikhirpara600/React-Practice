import { productArr } from "./productData"
import { createStore } from "redux"

function App() {

  const initialState = {
    products: productArr,
    cart: [],
    wishList: []
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CART_ADD_PRODUCT:
        return { ...state, cart: [...state.cart, action.payload] }
      case CART_REMOVE_PRODUCT:
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.productId !== action.payload.productId) }
      case CART_INCREASE_ITEM_QUANTITY:
        return { ...state, cart: state.cart.map((cartItem) => cartItem.productId === action.payload.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem) }
      case CART_DECREASE_ITEM_QUANTITY:
        return { ...state, cart: state.cart.map((cartItem) => cartItem.productId === action.payload.productId ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem).filter((cartItem) => cartItem.quantity > 0) }
      case WISHLIST_ADD_PRODUCT:
        return { ...state, wishList: [...state.wishList, action.payload] }
      case WISHLIST_REMOVE_PRODUCT:
        return { ...state, wishList: state.wishList.filter((wishListItem) => wishListItem.productId !== action.payload.productId) }  
      default:
        return state
    }
  }

  const CART_ADD_PRODUCT = "cart/addProduct"
  const CART_REMOVE_PRODUCT = "cart/removeProduct"
  const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity"
  const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity"
  const WISHLIST_ADD_PRODUCT = "wishList/addProduct"
  const WISHLIST_REMOVE_PRODUCT = "wishList/removeProduct"

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  console.log(store);

  store.subscribe(() => {
    console.log(store.getState());
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
