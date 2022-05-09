import React, {useState} from "react";
import styles from "./App.module.scss"
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";



export const App = function () {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([])

console.log(basket)

  return (
    <div className={styles.App}>
      <Header 
      basket={basket}
      />
      <Main 
      products={products}
      setProducts={setProducts}
      setBasket={setBasket}
      />
    </div>
  );
}
