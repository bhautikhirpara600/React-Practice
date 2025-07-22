import { useSelector } from "react-redux"
import Product from "./Product"

export default function Home() {
    const productList = useSelector((state) => state.products.list)
    const isLoading = useSelector(state => state.products.isLoading)
    const error = useSelector(state => state.products.error)
    return (
        isLoading ?
            <h1>Loading...</h1> :
            error ?
                <h2>Something went wrong!!</h2> :
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