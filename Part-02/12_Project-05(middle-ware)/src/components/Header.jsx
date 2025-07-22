import { Link } from 'react-router'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchingError, loadProducts, productLoading } from '../store/slices/productSlice'
import { cartItemLoading, fetchingCartError, loadCartItems } from '../store/slices/cartSlice'

export default function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productLoading())
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        dispatch(loadProducts(data))
      }).catch(err => {
        console.log(err);
        dispatch(fetchingError())
      })

    dispatch(cartItemLoading())
    fetch('https://fakestoreapi.com/carts/5')
      .then(res => res.json())
      .then(data => dispatch(loadCartItems(data.products)))
      .catch(err => {
        console.log(err);
        dispatch(fetchingCartError())
      })
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