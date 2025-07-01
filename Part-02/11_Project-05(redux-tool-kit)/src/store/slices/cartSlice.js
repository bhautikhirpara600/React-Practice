import { produce } from "immer"

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
export default function cartReducer(originalState = [], action) {
    return produce(originalState, (state) => {
        const existingItemIndex = state.findIndex(cartItem => cartItem.productId === action.payload.productId)
        switch(action.type) {
        case CART_ADD_PRODUCT:
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1
                return state
            }else {
                state.push({...action.payload, quantity: 1})
                return state
            }
        case CART_REMOVE_PRODUCT:
            state.splice(existingItemIndex, 1)
            return state
        case CART_INCREASE_ITEM_QUANTITY:
            state[existingItemIndex].quantity += 1
            return state
        case CART_DECREASE_ITEM_QUANTITY:
            state[existingItemIndex].quantity -= 1
            if(state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1)
            }
            return state
        default:
            return state
    }
    })
}