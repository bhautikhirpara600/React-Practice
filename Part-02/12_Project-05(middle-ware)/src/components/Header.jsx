import { Link } from 'react-router'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProduct } from '../store/slices/productSlice'
import { fetchCartItem } from '../store/slices/cartSlice'

export default function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
    dispatch(fetchCartItem())
  }, [])
  const cartProducts = useSelector(state => state.cart.list)
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