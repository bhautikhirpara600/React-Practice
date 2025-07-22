import { createSelector, createSlice } from "@reduxjs/toolkit"

const findItemIndex = (state, action) => state.list.findIndex(cartItem => cartItem.productId === action.payload.productId)

const slice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        list: [],
        error: ''
    },
    reducers: {
        cartItemLoading(state) {
            state.isLoading = true
            return state
        },
        loadCartItems(state, action) {
            state.list = action.payload
            state.isLoading = false
            return state
        },
        fetchingCartError(state, action) {
            state.error =action.payload || 'Something went wrong!!'
            state.isLoading = false
            return state
        },
        addCartProduct(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            } else {
                state.list.push({ ...action.payload, quantity: 1 })
            }
        },
        removeCartProduct(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.list.splice(existingItemIndex, 1)
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.list[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.list[existingItemIndex].quantity -= 1
            if (state.list[existingItemIndex].quantity === 0) {
                state.list.splice(existingItemIndex, 1)
            }
        }
    }
})

// console.dir(slice);
const cartListSelector = (state) => state.cart.list
const productListSelector = (state) => state.products.list

export const cartItemSelector = createSelector([cartListSelector, productListSelector], (cartItem, productItem) => 
    (cartItem.map(({productId, quantity}) => {
        const cartDetail = productItem.find((product) => product.id === productId)
        return {...cartDetail, quantity}
    }).filter(({title}) => title))
)

export const cartLoadingSelector = (state) => state.cart.isLoading
export const cartErrorSelector = (state) => state.cart.error

export default slice.reducer

export const { cartItemLoading, loadCartItems, fetchingCartError, addCartProduct, removeCartProduct, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions