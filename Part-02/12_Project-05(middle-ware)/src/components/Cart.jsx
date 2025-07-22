import { useSelector } from "react-redux"
import CartItem from "./CartItem"

export default function Cart() {

  const productsData = useSelector(state => state.products.list)
  const isCartLoading = useSelector(state => state.cart.isLoading)
  const isCartError = useSelector(state => state.cart.error)
  const cartItemState = useSelector((state) => state.cart.list)
  const cartItems = cartItemState.map(({ productId, quantity }) => {
    const cartItemDetail = productsData.find(product => product.id === productId)
    return { ...cartItemDetail, quantity }
  }).filter(({title}) => title)

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isCartLoading ?
          <h1>Loading...</h1> :
          isCartError ?
            <h2>Something went wrong!!</h2> :
            cartItems.map(({ id, image, price, rating, title, quantity }) => (
              <CartItem
                key={id}
                productId={id}
                imageUrl={image}
                price={price}
                rating={rating.rate}
                title={title}
                quantity={quantity}
              />
            ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {isCartLoading ?
            "" :
            isCartError ?
              "":
              <div className="total">${cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)}</div>}
        </div>
      </div>
    </div>
  )
}