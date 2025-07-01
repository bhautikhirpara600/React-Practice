import { useSelector } from "react-redux"
import Product from "./Product"

export default function Home() {
    const productList = useSelector((state) => state.products)

    return (
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