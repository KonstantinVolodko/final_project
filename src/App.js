import React, {useState} from "react";
import styles from "./App.module.scss"
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { BasketPage } from "./components/basketPage/BasketPage";



export const App = function () {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([])


console.log(basket, 'app')

  const getSum = () => {
        return basket.reduce((acc, el) => {
            return acc + Number(el.price)
        }, 0)
    }

  return (
    <div className={styles.App}>
      <Routes>
      <Route path="/" element={
        <div>
          <Header 
            basket={basket}
            getSum={getSum()}
          />
          <Main 
            products={products}
            setProducts={setProducts}
            setBasket={setBasket}
          />
        </div> 
      }/>
      <Route path="/basket" element={
        <BasketPage 
        basket={basket}
        getSum={getSum()}
        products={products}
        />
      }/>
      </Routes>
    </div>
  );
}
