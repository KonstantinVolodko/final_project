import React, {useState, useEffect} from "react";
import styles from "./App.module.scss"
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import { BasketPage } from "./components/basketPage/BasketPage";
import { AdoptedPage } from "./components/adoptedPage/AdoptedPage";
import { promoCodes } from "./constants/Constants";
import { Api } from "./constants/Constants";
import { LicencePage } from "./components/licencePage/LicencePage";
import { AboutCompany } from "./components/aboutCompany/AboutCompany";
import { newCount } from "./constants/Helper";
import { useMediaQuery } from 'react-responsive'
import { Footer } from "./components/footer/Footer";
import { MobileHeader } from "./components/mobile/mobileHeader/MobileHeader";
import { BasketWindow } from "./components/basketWindow/BasketWindow"
import { ProductsContainer } from "./components/productsContainer/ProductsContainer"
import { MainMenu } from "./components/mainMenu/MainMenu";


export const App = function () {
  const [products, setProducts] = useState(Api);
  const [basket, setBasket] = useState([]);
  const [promo, setPromo] = useState('')

  const desctop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const mobile = useMediaQuery({
    query: '(max-width: 1023px)'
  })

  const bigMobile = useMediaQuery({ query: '(max-width: 425px)' })
  
  // const addedBasket = el => setBasket(state => [...state, el])

  // const pushLocal = () => {
  //   localStorage.setItem('basketItems', JSON.stringify(basket));
  // }

  // useEffect(() => {
  //   pushLocal()
  // }, [basket])

  // console.log(JSON.parse(localStorage.getItem('basketItems')))

  const addedBasket = el => {
    const currentProd = basket.find(product => product.id === el.id)

    if(currentProd) {
      setBasket(newCount(basket, currentProd.id))
    }else {
      setBasket(state => [...state, {
        ...el,
        count: 1
      }])
    }
  }
  
  const condition = (promoItem) => {
    return (
      promoItem === promo
    )
  }

  const getSum = () => {
    if(promoCodes.find(condition)){
      return basket.reduce((acc, el) => {
        return acc + Math.round(Number(el.price - (el.price * 0.1))) * el.count
    }, 0)
    }else {
      return basket.reduce((acc, el) => {
        return acc + Math.round(Number(el.price)) * el.count
    }, 0)
    }
    }
        


  return (   
    <div className={styles.App}>
      {desctop && 
      <Routes>
      <Route path="/" element={
        <div>
          <Header 
            basket={basket}
            getSum={getSum()}
            setBasket={setBasket}
            addedBasket={addedBasket}
            desctop={desctop}
            mobile={mobile}
          />
          <Main 
            products={products}
            setProducts={setProducts}
            setBasket={setBasket}
            addedBasket={addedBasket}
            desctop={desctop}
            mobile={mobile}
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
        desctop={desctop}
        mobile={mobile}
        bigMobile={bigMobile}
        />
      }/>
      <Route path="/adopted" element={
        <AdoptedPage 
        basket={basket}
        getSum={getSum()}
        mobile={mobile}
        desctop={desctop}
        />
      }/>
      <Route path="/licence" element={
        <LicencePage 
        getSum={getSum()}
        basket={basket}
        desctop={desctop}
        mobile={mobile}
        />
      }/>
      <Route path="/aboutCompany" element={
        <AboutCompany 
        getSum={getSum()}
        basket={basket}
        desctop={desctop}
        mobile={mobile}
        />
      }/>

      </Routes>
      }

    {mobile && 
    <Routes>
      <Route path="/" element={
        <div>
          <MobileHeader />
          <BasketWindow 
              getSum={getSum()}
              basket={basket}
              setBasket={setBasket}
              mobile={mobile}
              desctop={desctop}
              addedBasket={addedBasket}
          />
          <MainMenu 
          mobile={mobile}
          desctop={desctop}
          />
          <ProductsContainer 
            products={products}
            setBasket={setBasket}
            addedBasket={addedBasket}
            setProducts={setProducts}
            mobile={mobile}
            />
          <Footer />
        </div>
      }/>
      <Route path="/AboutCompany" element={
        <AboutCompany 
        desctop={desctop}
        mobile={mobile}
        />
      }
      />
      <Route path="/licence" element={
        <LicencePage 
        desctop={desctop}
        mobile={mobile}
        />
      }
      />
      <Route path="/basket" element={
        <BasketPage 
        basket={basket}
        getSum={getSum()}
        products={products}
        addedBasket={addedBasket}
        setBasket={setBasket}
        promo={promo}
        setPromo={setPromo}
        desctop={desctop}
        mobile={mobile}
        bigMobile={bigMobile}
        />
      }
      />

      <Route path="/adopted" element={
        <AdoptedPage
        mobile={mobile}
        desctop={desctop}
        />
      } />
        
    </Routes>
    
    }
    </div>
    
  );
}
