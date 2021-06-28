import { useState } from "react";

function useAddItemToBasket() {
	const initialBasket = [
		{
			id: 1,
			title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
			price: 109.95,
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			quantity: 1,
		},
		{
			id: 2,
			title: "Mens Casual Premium Slim Fit T-Shirts ",
			price: 22.3,
			image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
			quantity: 1,
		},
	];

	const [basket, setBasket] = useState(initialBasket);

	function addItemToBasket(item) {
		setBasket([...basket, item]);
	}

	function handleQuantityChange(quantity, targetItemId) {
		const newBasket = basket.map((basketItem) => {
			if (basketItem.id === targetItemId) {
				return {
					...basketItem,
					quantity: Number(quantity),
				};
			}
			return basketItem;
		});
		console.log(newBasket);
		setBasket(newBasket);
	}

	return { basket, addItemToBasket, handleQuantityChange };
}
export default useAddItemToBasket;
