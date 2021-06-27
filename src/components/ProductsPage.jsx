
import {Link, useParams} from "react-router-dom"


function Product({product}) {
    return (
        <Link to={`/products/${product.id}`}>
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
    
    const {catId} = useParams()
    console.log(catId)

    if(catId) {
        const filteredProductList = productList.filter(product => product.categoryId === Number(catId))

        return (
            <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {filteredProductList.map((product)=> {  
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