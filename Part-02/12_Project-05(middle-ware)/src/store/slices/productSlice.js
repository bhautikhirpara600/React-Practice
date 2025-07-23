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
        },
        fetchingError(state, action) {
            state.error = action.payload || 'Something went wrong!!'
            state.isLoading = false
        },
        loadProducts(state, action) {
            state.isLoading = false
            state.list = action.payload
        }
    }
})


export const productListSelector = (state) => state.products.list
export const productLoadingSelector = (state) => state.products.isLoading
export const productErrorSelector = (state) => state.products.error

export default slice.reducer
const { loadProducts, productLoading, fetchingError } = slice.actions

export const fetchProductData = () => (dispatch, getState) => {
    dispatch(productLoading())
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch(loadProducts(data)))
        .catch((err) => {
            console.log(err);
            dispatch(fetchingError())
        })
}