import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail({ addItemToBasket }) {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		setTimeout(() => {
			fetch(`http://localhost:4000/products/${id}`)
				.then((resp) => resp.json())
				.then(setProduct);
		}, 1000);
	}, [id]);

	// const selectedProduct = productList.find((product) => {
	//     console.log(product)
	//     return product.id == Number(id)
	// })
	// console.log(selectedProduct)

	return (
		<section className="product-detail main-wrapper">
			<img src={product.image} alt={product.title} />
			<div className="product-detail__side">
				<h3></h3>
				<h2>{product.title}</h2>
				<p>{product.description}</p>
				<p>£{product.price}</p>
				{/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
				<button
					onClick={() =>
						addItemToBasket({
							id: product.id,
							title: product.title,
							image: product.image,
							price: product.price,
						})
					}
				>
					Add to basket
				</button>
			</div>
		</section>
	);
}
export default ProductDetail;
