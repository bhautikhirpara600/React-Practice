import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('product/fetchProducts', async() => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json()
    }catch {
        throw error
    }
})

const slice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        list: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.list = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || 'Something went wrong!!'
            })
    }
})


export const productListSelector = (state) => state.products.list
export const productLoadingSelector = (state) => state.products.isLoading
export const productErrorSelector = (state) => state.products.error

export default slice.reducer