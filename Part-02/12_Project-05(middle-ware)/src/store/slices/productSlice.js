import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        list: [],
        error: ''
    },
    reducers: {
        productLoading(state) {
            state.isLoading = true
            return state
        },
        fetchingError(state) {
            state.error = 'Something went wrong!!'
            state.isLoading = false
            return state
        },
        loadProducts(state, action) {
            state.isLoading = false
            state.list = action.payload
            return state
        }
    }
})

export default slice.reducer
export const { loadProducts, productLoading, fetchingError } = slice.actions