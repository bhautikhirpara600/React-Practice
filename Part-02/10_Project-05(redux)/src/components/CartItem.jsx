import { useDispatch } from "react-redux"
import { decreaseCartItemQuantity, increaseCartItemQuantity } from "../store/reducers/cartReducer"

export default function CartItem({ productId, imageUrl, price, rating, title, quantity }) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(decreaseCartItemQuantity(productId)) }>-</button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseCartItemQuantity(productId)) }>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}