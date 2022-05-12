import React from "react";
import styles from "./BasketProductInfo.module.scss"

export const BasketProductInfo = ({
    basket
}) => {
    return (
        <div className={styles.container}>
            {
                basket.map(el => {
                    return (
                        <div className={styles.prodContainer}>
                        <div className={styles.content}>
                            <div>
                                <img src={el.image} alt="#" />
                            </div>
                            <div className={styles.nameContainer}>
                                <div className={styles.name}>{el.name}</div>
                                <div className={styles.description}>descript</div>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button>+-</button>
                            <div className={styles.price}>{el.price} ₽</div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}