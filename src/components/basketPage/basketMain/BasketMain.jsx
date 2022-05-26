import React, {useState} from "react";
import { BasketProductInfo } from "../basketProductInfo/BasketProductInfo";
import { AboutUsForm } from "../forms/AboutUsForm";
import styles from './BasketMain.module.scss'
import { Promo } from "./promo/Promo";
import { MySlider } from "./slider/Slider";
import { SliderMobile } from "./slider/sliderMobile/SliderMobile";
import { SliderSouce } from "./slider/sliderSouce/SliderSouce";
import { SliderSouceMobile } from "./slider/sliderSouceMobile/SliderSouceMobile";

export const BasketMain = ({
    basket, getSum, products, addedBasket, setBasket, promo, setPromo, filtered, desctop, mobile
}) => {

    return (
        <div className={styles.basketMain}>
            <div className={styles.firstTitle}>Ваш заказ</div>
            <div className={styles.BasketProductInfo}>
                <BasketProductInfo 
                basket={basket}
                setBasket={setBasket}
                filtered={filtered}
                desctop={desctop}
                mobile={mobile}
                />
            </div>
            <div className={styles.promo}>
                <Promo 
                getSum={getSum}
                basket={basket}
                setBasket={setBasket}
                promo={promo}
                setPromo={setPromo}
                desctop={desctop}
                mobile={mobile}
                />
            </div>
            
            <div className={styles.sliderContainer}>
                <div className={styles.secondTitle}>
                    Добавить к заказу?
                </div>
                {desctop && 
                <MySlider 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                desctop={desctop}
                mobile={mobile}
                />
                }

                {mobile && 
                <SliderMobile 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                desctop={desctop}
                mobile={mobile}
                />
                }
                    
            </div>

            <div className={styles.sliderContainer}>
                {desctop &&
                <SliderSouce 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                />
                }

                {mobile && 
                <SliderSouceMobile 
                products={products}
                setBasket={setBasket}
                addedBasket={addedBasket}
                />
                }
            </div>
            <div className={styles.formContainer}>
                <div>
                    <AboutUsForm 
                    getSum={getSum}
                    basket={basket}
                    setBasket={setBasket}
                    mobile={mobile}
                    desctop={desctop}
                    />
                </div>
            </div>
            

        </div>
    )

}