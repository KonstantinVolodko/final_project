import React from "react";
import styles from "./ProductInfoOtherContainer.module.scss"

export const ProductInfoOtherContainer = ( {
    img, name, description, price, setBasket, handleOpen
}) => {


    // 

    return (
        <div  className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img onClick={handleOpen} className={styles.productImage} src={img} alt="#" />
            </div>
            <div className={styles.productTitle}>
                <div onClick={handleOpen} className={styles.productName}>{name}</div>
                <div onClick={handleOpen} className={styles.productDescription}>{description}</div>
                <div className={styles.priceContainer}>
                    <button onClick={() => setBasket()} className={styles.productButton}>Выбрать</button>
                    <div onClick={handleOpen} className={styles.price}>от {price} ₽</div>
                </div>
            </div>
        </div>
    )
}