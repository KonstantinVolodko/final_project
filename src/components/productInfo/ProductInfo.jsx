import React from "react";
import { BasicModal } from "../basicModal/BasicModal";

import styles from "./ProductInfo.module.scss"

export const ProductInfo = ({
    img, name, description, price, setBasket, setProducts, products, id
}) => {
    return(
        <div className={styles.mainContainer}>
            <img className={styles.productImage} src={img} alt="#" />
            <div className={styles.productTitle}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.productDescription}>{description}</div>
                <div className={styles.priceContainer}>
                    <BasicModal 
                    img={img}
                    name={name}
                    description={description}
                    price={price}
                    setBasket={setBasket}
                    setProducts={setProducts}
                    products={products}
                    />
                    <div className={styles.price}>от {price} ₽</div>
                </div>
            </div>
            
            
            
        </div>
    )
}