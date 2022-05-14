import React from "react";
import styles from './ProductInfoOther.module.scss'

export const ProductInfoOther = ({
    img, name, description, price, setBasket
}) => {

    const addFunction = () => {
        return (
            setBasket()
        )
    }

    return (
        <div className={styles.mainContainer}>
            <img className={styles.productImage} src={img} alt="#" />
            <div className={styles.productTitle}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.productDescription}>{description}</div>
                <div className={styles.priceContainer}>
                    <button className={styles.productButton} onClick={() => addFunction()}>Выбрать</button>
                    <div className={styles.price}>от {price} ₽</div>
                </div>
            </div>
        </div>
    )
}