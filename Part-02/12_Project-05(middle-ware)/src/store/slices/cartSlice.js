import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"

const findItemIndex = (state, action) => state.list.findIndex(cartItem => cartItem.productId === action.payload.productId)

export const fetchCartItem = createAsyncThunk('cart/fetchItem', async() => {
    try{
        const response = await fetch('https://fakestoreapi.com/carts/5')
        return response.json()
    }catch {
        throw error
    }
})

const slice = createSlice({
    name: "cart",
    initialState: {
        isLoading: false,
        list: [],
        error: ''
    },
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCartItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.list = action.payload.products
            })
            .addCase(fetchCartItem.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Something went wrong!!'
            })
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
export const { addCartProduct, removeCartProduct, increaseCartItemQuantity, decreaseCartItemQuantity } = slice.actions