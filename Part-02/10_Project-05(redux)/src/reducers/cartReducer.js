export const CART_ADD_PRODUCT = "cart/addProduct"
export const CART_REMOVE_PRODUCT = "cart/removeProduct"
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity"
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity"

export default function cartReducer(state = [], action) {
    switch(action.type) {
        case CART_ADD_PRODUCT:
            return [...state, action.payload]
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