import React from "react";
import styles from './ProductInfoContainer.module.scss'

export const ProductInfoContainer = ({
    img, name, description, price, setBasket, handleOpen
}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
            <img className={styles.productImage} src={img} alt="#" />
            </div>
            
            <div className={styles.productTitle}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.productDescription}>{description}</div>
                <div className={styles.priceContainer}>
                <button className={styles.productButton}>Выбрать</button>                   
                    <div className={styles.price}>от {price} ₽</div>
                </div>
            </div>
        </div>
    )
}