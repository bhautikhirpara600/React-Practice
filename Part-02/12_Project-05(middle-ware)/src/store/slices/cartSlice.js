import { createSlice } from "@reduxjs/toolkit"

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
        fetchingCartError(state) {
            state.error = 'Something went wrong!!'
            state.isLoading = false
            return state
        },
        addCartProduct(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            }else {
                state.list.push({...action.payload , quantity: 1})
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
            if(state.list[existingItemIndex].quantity === 0) {
                state.list.splice(existingItemIndex, 1)
            }
        }
    }
})

// console.dir(slice);

export default slice.reducer

export const { cartItemLoading, loadCartItems, fetchingCartError, addCartProduct, removeCartProduct, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions