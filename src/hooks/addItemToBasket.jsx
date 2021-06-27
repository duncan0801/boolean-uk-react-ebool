import { useState } from "react"

function useAddItemToBasket() {

    const initialBasket = [{
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "quantity": 1
      },
      {
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price":  22.3,
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "quantity": 1
      }]

    const [basket, setBasket] = useState(initialBasket)

    function addItemToBasket(item) {
        setBasket([...basket, item])
    }

    function handleQuantityChange(event, itemIndex) {
        setBasket([...basket, {...basket[itemIndex], quantity : event.target.value}])
        console.log([...basket, {...basket[itemIndex], quantity : event.target.value}])
    }

    return {basket, addItemToBasket, handleQuantityChange}
}
export default useAddItemToBasket