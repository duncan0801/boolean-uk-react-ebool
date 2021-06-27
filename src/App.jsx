import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useFetchProducts from "./hooks/fetchProducts"
import BasketPage from "./pages/BasketPage";
import useAddItemToBasket from "./hooks/addItemToBasket";
import CategoriesPage from "./pages/CategoriesPage";


function App() {
  let productList = useFetchProducts()
  const {basket, addItemToBasket, handleQuantityChange} = useAddItemToBasket()

  function none() {
  return none
  }

  return (
    <>
      <Header />
      <main>
      <Switch>

        <Route path="/categories" exact>
          <CategoriesPage/>
        </Route>

        <Route path="/categories/:catId">
          <ProductsPage
            productList={productList}
          />
        </Route>

        <Route path="/products/:id">
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
          handleQuantityChange={handleQuantityChange}
          />
        </Route>

      </Switch>
      </main>
    </>
  );
}

export default App;
