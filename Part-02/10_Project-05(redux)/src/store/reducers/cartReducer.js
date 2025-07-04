// Action types
export const CART_ADD_PRODUCT = "cart/addProduct"
export const CART_REMOVE_PRODUCT = "cart/removeProduct"
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity"
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity"

// Action creators
export const addCartProduct = (productData) => ({ type: CART_ADD_PRODUCT, payload: productData })
export const removeCartProduct = (productId) => ({ type: CART_REMOVE_PRODUCT, payload: { productId } })
export const increaseCartItemQuantity = (productId) => ({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId } })
export const decreaseCartItemQuantity = (productId) => ({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId } })

// reducer
export default function cartReducer(state = [], action) {
    switch(action.type) {
        case CART_ADD_PRODUCT:
            const existingItem = state.find(cartItem => cartItem.productId === action.payload.productId)
            if (existingItem) {
                return state.map(cartItem => cartItem.productId === existingItem.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
            }
            return [...state, {...action.payload, quantity: 1}]
        case CART_REMOVE_PRODUCT:
            return state.filter(cartItem => cartItem.productId !== action.payload.productId)
        case CART_INCREASE_ITEM_QUANTITY:
            return state.map(cartItem => cartItem.productId === action.payload.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
        case CART_DECREASE_ITEM_QUANTITY:
            return state.map(cartItem => cartItem.productId === action.payload.productId ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem).filter(cartItem => cartItem.quantity > 0)
        default:
            return state
    }
}