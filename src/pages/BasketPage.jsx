import BasketItem from "../components/BasketItem"

function BasketPage({basket, handleQuantityChange}) {
    return (
        <main>
            <section class="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    {basket.map(((basketItem, index) => {
                        console.log(basketItem)
                        return (
                            <li>
                                <BasketItem
                                key={index}
                                basketItem={basketItem}
                                basket={basket}
                                handleQuantityChange={handleQuantityChange}
                                />
                            </li>
                        )
                    }))}
                </ul>
                {/* <!-- Basket total is calculated using each item's total from above --> */}
                <h3>Your total: £109.95</h3>
            </section>
            </main>

    )
}

export default BasketPage

