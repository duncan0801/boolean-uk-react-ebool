import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useFetchProducts from "./hooks/fetchProducts"
import BasketPage from "./pages/BasketPage";
import useAddItemToBasket from "./hooks/addItemToBasket";

function App() {
  let productList = useFetchProducts()
  const {basket, addItemToBasket} = useAddItemToBasket()

  return (
    <>
      <Header />
      <Switch>
        <Route path="/product:id" exact>
          <ProductDetail
          productList={productList}
          basket={basket}
          addItemToBasket={addItemToBasket}
          />
        </Route>
        <Route path="/" exact>
          <ProductsPage
          productList={productList}
          />
        </Route>
        <Route path="/basket" exact>
          <BasketPage
          basket={basket}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
