
import {Link} from "react-router-dom"


function Product({product}) {
    return (
        <Link to={`/product${product.id}`}>
            <article className="product-item">
                <img
                src={product.image}
                alt={product.title}
                />
                <h3>{product.title}</h3>
            </article>
        </Link>
    )
}


function ProductsPage({productList}) {
    

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {productList.map((product)=> {  
                        return (
                            <li>
                                <Product
                                key={product.id}
                                product={product}
                                />
                            </li>
                            )
                    })}
                </ul>
            </section>
            </main>

    )
}

export default ProductsPage