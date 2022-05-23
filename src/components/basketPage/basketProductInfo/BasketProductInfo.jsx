import React from "react";
import styles from "./BasketProductInfo.module.scss"
import { BasketProdItem } from "./basketProdItem/BasketProdItem";

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
                        <BasketProdItem 
                            basket={basket}
                            setBasket={setBasket}
                            name={el.name}
                            id={el.id}
                            count={el.count}
                            description={el.description}
                            image={el.image}
                            price={el.price}

                        />
                    )
                })
            }
        </div>
    )
}