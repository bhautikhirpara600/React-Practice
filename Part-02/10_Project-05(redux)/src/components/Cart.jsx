import { useSelector } from "react-redux"
import CartItem from "./CartItem"

export default function Cart() {

  const cartItems = useSelector((state) => state.cart)

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
        {cartItems.map(({ productId, imageUrl, price, rating, title, quantity }) => (
          <CartItem
            key={productId}
            productId={productId}
            imageUrl={imageUrl}
            price={price}
            rating={rating}
            title={title}
            quantity={quantity}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)}</div>
        </div>
      </div>
    </div>
  )
}