import React, {useState} from "react";
import { BasketProductInfo } from "../basketProductInfo/BasketProductInfo";
import { AboutUsForm } from "../forms/AboutUsForm";
import styles from './BasketMain.module.scss'
import { Promo } from "./promo/Promo";
import { MySlider } from "./slider/Slider";
import { SliderSouce } from "./slider/sliderSouce/SliderSouce";

export const BasketMain = ({
    basket, getSum, products, addedBasket, setBasket, promo, setPromo
}) => {

    return (
        <div>
            <div className={styles.firstTitle}>Ваш заказ</div>
            <div className={styles.BasketProductInfo}>
                <BasketProductInfo 
                basket={basket}
                setBasket={setBasket}
                />
            </div>
            <div className={styles.promo}>
                <Promo 
                getSum={getSum}
                basket={basket}
                setBasket={setBasket}
                promo={promo}
                setPromo={setPromo}
                />
            </div>
            
            <div className={styles.sliderContainer}>
                <div className={styles.secondTitle}>
                    Добавить к заказу?
                </div>
                <MySlider 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                />
                    
            </div>

            <div className={styles.sliderContainer}>
                <SliderSouce 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                />
            </div>
            <div className={styles.formContainer}>
                <div>
                    <AboutUsForm 
                    getSum={getSum}
                    basket={basket}
                    setBasket={setBasket}
                    />
                </div>
            </div>
            

        </div>
    )

}