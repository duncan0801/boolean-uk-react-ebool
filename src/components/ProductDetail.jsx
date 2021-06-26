import { useParams } from "react-router-dom"

function ProductDetail({productList, basket, addItemToBasket}) {

    const {id} = useParams()
    console.log(id)
    

    const selectedProduct = productList.find((product) => {
        console.log(productList)
        return product.id == Number(id)
    })
    
    return (
        <section className="product-detail main-wrapper">
            <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            />
            <div className="product-detail__side">
            <h3></h3>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p>£{selectedProduct.price}</p>
            {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
            <button onClick={() => addItemToBasket({
                title: selectedProduct.title,
                image: selectedProduct.image,
                price: selectedProduct.price
            })}>Add to basket</button>
            </div>
        </section>

    )
}
export default ProductDetail