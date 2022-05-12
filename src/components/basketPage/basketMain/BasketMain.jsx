import React from "react";
import { BasketProductInfo } from "../basketProductInfo/BasketProductInfo";
import styles from './BasketMain.module.scss'
import { Promo } from "./promo/Promo";
import { Slider } from "./slider/Slider";

export const BasketMain = ({
    basket, getSum, products
}) => {
    return (
        <div>
            <div className={styles.firstTitle}>Ваш заказ</div>
            <div>
                <BasketProductInfo 
                basket={basket}
                />
            </div>
            <div className={styles.promo}>
                <Promo 
                getSum={getSum}
                />
            </div>
            <div className={styles.secondTitle}>
                Добавить к заказу?
            </div>
            <div>
                <Slider 
                products={products}
                />
            </div>
        </div>
    )

}