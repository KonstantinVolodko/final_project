import React, {useState} from "react";
import styles from "./App.module.scss"
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { BasketPage } from "./components/basketPage/BasketPage";
import { AdoptedPage } from "./components/adoptedPage/AdoptedPage";
import { promoCodes } from "./constants/Constants";



export const App = function () {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [promo, setPromo] = useState('')
  
  const addedBasket = el => setBasket(state => [...state, el])
  
  const condition = (promoItem) => {
    return (
      promoItem === promo
    )
  }

  const getSum = () => {
    if(promoCodes.find(condition)){
      return basket.reduce((acc, el) => {
        return acc + Math.round(Number(el.price - (el.price * 0.1)))
    }, 0)
    }else {
      return basket.reduce((acc, el) => {
        return acc + Math.round(Number(el.price))
    }, 0)
    }
    }
        


  return (
    <div className={styles.App}>
      <Routes>
      <Route path="/" element={
        <div>
          <Header 
            basket={basket}
            getSum={getSum()}
            setBasket={setBasket}
          />
          <Main 
            products={products}
            setProducts={setProducts}
            setBasket={setBasket}
            addedBasket={addedBasket}
          />
        </div> 
      }/>
      <Route path="/basket" element={
        <BasketPage 
        basket={basket}
        getSum={getSum()}
        products={products}
        addedBasket={addedBasket}
        setBasket={setBasket}
        promo={promo}
        setPromo={setPromo}
        />
      }/>
      <Route path="/adopted" element={
        <AdoptedPage 
        basket={basket}
        getSum={getSum()}
        />
      }
      />
      </Routes>
    </div>
  );
}
