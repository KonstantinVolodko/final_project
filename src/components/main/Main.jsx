import React, { useEffect} from "react";
import { MainMenu } from "../mainMenu/MainMenu";
import { Api } from "../../constants/Constants";
import { ProductInfo } from "../productInfo/ProductInfo";
import styles from "./Main.module.scss"
import { Footer } from "../footer/Footer";
import { ProductsContainer } from "../productsContainer/ProductsContainer";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { Header } from "../header/Header";
import { BasketWindow } from "../basketWindow/BasketWindow";


export const Main = ({
    products, setProducts, setBasket
}) => {

    
    
    const getData = () => {
        if(!localStorage.getItem('products')){
            localStorage.setItem('products', JSON.stringify(Api))
        }else {
            setProducts(JSON.parse(localStorage.getItem('products')))
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          getData()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);


    const addedBasket = el => setBasket(state => [...state, el])

    
    
    return (
        <div>
            <MainMenu />
            <ProductsContainer 
            products={products}
            setBasket={setBasket}
            addedBasket={addedBasket}
            />
            <Footer />

        </div>
    )
}