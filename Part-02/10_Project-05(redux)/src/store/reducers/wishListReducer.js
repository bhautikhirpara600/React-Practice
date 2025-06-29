// Action types
export const WISHLIST_ADD_PRODUCT = "wishList/addProduct"
export const WISHLIST_REMOVE_PRODUCT = "wishList/removeProduct"

// Action creators
export const addWishListProduct = (productId) => ({ type: WISHLIST_ADD_PRODUCT, payload: { productId } })
export const removeWishListProduct = (productId) => ({ type: WISHLIST_REMOVE_PRODUCT, payload: { productId } })

// reducer
export default function wishListReducer(state = [], action) {
    switch(action.type) {
        case WISHLIST_ADD_PRODUCT:
            return [...state, action.payload]
        case WISHLIST_REMOVE_PRODUCT:
            return state.filter(wishListItem => wishListItem.productId !== action.payload.productId)
        default:
            return state
    }
}