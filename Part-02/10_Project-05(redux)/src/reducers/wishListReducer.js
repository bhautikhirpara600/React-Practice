export const WISHLIST_ADD_PRODUCT = "wishList/addProduct"
export const WISHLIST_REMOVE_PRODUCT = "wishList/removeProduct"

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