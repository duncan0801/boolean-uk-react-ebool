function BasketItem({basketItem, basket, handleQuantityChange}) {
    const itemIndex = basket.indexOf(basketItem)
    return (
        <article class="basket-container__item">
                    <img
                        src={basketItem.image}
                        alt={basketItem.title}
                        width="90"
                    />
                    <p>{basketItem.title}</p>
                    <p>
                        Qty:
                        <select value={basket[itemIndex].quantity} onChange={(event) => handleQuantityChange(event, itemIndex)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </p>
                    {/* <!-- The item total is calculated using the Qty selected value --> */}
                    <p>Item total: £{basketItem.price.toFixed(2)}</p>
                    </article>
    )
}
export default BasketItem