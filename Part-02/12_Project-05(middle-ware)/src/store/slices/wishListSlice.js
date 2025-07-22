import { createSlice } from "@reduxjs/toolkit"

// Action types
// export const WISHLIST_ADD_PRODUCT = "wishList/addWishListProduct"
// export const WISHLIST_REMOVE_PRODUCT = "wishList/removeWishListProduct"

// Action creators
// export const addWishListProduct = (productId) => ({ type: WISHLIST_ADD_PRODUCT, payload: { productId } })
// export const removeWishListProduct = (productId) => ({ type: WISHLIST_REMOVE_PRODUCT, payload: { productId } })

// reducer
// export default function wishListReducer(state = [], action) {
//     switch(action.type) {
//         case WISHLIST_ADD_PRODUCT:
//             return [...state, action.payload]
//         case WISHLIST_REMOVE_PRODUCT:
//             return state.filter(wishListItem => wishListItem.productId !== action.payload.productId)
//         default:
//             return state
//     }
// }

const slice = createSlice({
    name: "wishList",
    initialState: [],
    reducers: {
        addWishListProduct(state, action) {
            state.push(action.payload)
        },
        removeWishListProduct(state, action) {
            const existingItemIndex = state.findIndex(wishListItem => wishListItem.productId === action.payload.productId)
            state.splice(existingItemIndex, 1)
        }
    }
})

export default slice.reducer

export const { addWishListProduct, removeWishListProduct } = slice.actions