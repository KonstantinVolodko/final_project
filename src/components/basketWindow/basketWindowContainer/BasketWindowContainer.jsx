import React from "react";
import styles from './BasketWindowContainer.module.scss'
import { Link } from "react-router-dom";

export const BasketWindowContainer = ({
    basket, getSum
}) => {
    return (
        <div className={styles.basketWindowContainer}>
            <div className={styles.title}>Ваш заказ</div>
            <div className={styles.container}>

            {
                basket.map(el => {
                    return(
                        <div className={styles.prodContainer}>
                            <div><img src={el.image} alt="#" /></div>
                            <div className={styles.titleContainer}>
                                <div className={styles.name}>{el.name}</div>
                                <div className={styles.description}>Тесто</div>
                                <div className={styles.priceContainer}>
                                    <div>+-</div>
                                    <div className={styles.price}>{el.price} ₽</div>
                                </div>
                            </div>
                        </div>
                    )
                    
                })
            }

            </div>
            <div className={styles.downContainer}>
                <div className={styles.finalPrice}>Итого: {getSum} ₽</div>
                <Link className={styles.link} to='/basket'>
                    <button className={styles.sendBtn}>Оформить заказ</button>
                </Link>
            </div>
        </div>
    )
}