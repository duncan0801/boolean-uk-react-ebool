function BasketItem() {
    return (
        <article class="basket-container__item">
                    <img
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        width="90"
                    />
                    <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                    <p>
                        Qty:
                        <select
                        ><option value="0">0</option
                        ><option value="1">1</option
                        ><option value="2">2</option
                        ><option value="3">3</option></select
                        >
                    </p>
                    {/* <!-- The item total is calculated using the Qty selected value --> */}
                    <p>Item total: £109.95</p>
                    </article>
    )
}
export default BasketItem