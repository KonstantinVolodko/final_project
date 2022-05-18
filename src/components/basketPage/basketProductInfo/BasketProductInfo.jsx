import React from "react";
import styles from "./BasketProductInfo.module.scss"

export const BasketProductInfo = ({
    basket, setBasket
}) => {

    // const onDelete = (el) => {
    //     const newItemsBasket = basket.filter(e => e.id !== id)
    //     setBasket(newItemsBasket)
    //   }

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
                            <button className={styles.deleteBtn} onClick={() => setBasket(basket.filter(e => e.id !== el.id))}>delete</button>
                            <div className={styles.price}>{el.price} ₽</div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}