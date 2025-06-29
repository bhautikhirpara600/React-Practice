import { Link } from 'react-router'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux'

export default function Header() {
  const cartProducts = useSelector(state => state.cart)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  )
}