import { useDispatch } from "react-redux";
import { addCartProduct } from "../store/slices/cartSlice";

export default function Product({ productId, imageUrl, price, rating, title }) {

  const dispatch = useDispatch()

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={() => dispatch(addCartProduct({ productId, imageUrl, price, rating, title }))}>Add to Cart</button>
        <button>Wish List</button>
      </div>
    </div>
  )
}