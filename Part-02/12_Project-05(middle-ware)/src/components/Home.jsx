import { useSelector } from "react-redux"
import Product from "./Product"
import { productErrorSelector, productListSelector, productLoadingSelector } from "../store/slices/productSlice"

export default function Home() {
    const isLoading = useSelector(productLoadingSelector)
    const error = useSelector(productErrorSelector)
    const productList = useSelector(productListSelector)
    return (
        isLoading ?
        ( <h1>Loading...</h1> ) :
        error ?
        ( <h2>Something went wrong!!</h2> ) :
        <>
            <div className="products-container">
                {productList.map(({ id, image, price, rating, title }) => (
                    <Product
                        key={id}
                        productId={id}
                        imageUrl={image}
                        price={price}
                        rating={rating.rate}
                        title={title}
                    />
                ))}
            </div>
        </>
    )
}