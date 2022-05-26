import React from "react";
import styles from "./BasketProductInfo.module.scss"
import { BasketProdItem } from "./basketProdItem/BasketProdItem";

export const BasketProductInfo = ({
    basket, setBasket, desctop, mobile
}) => {

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
                            desctop={desctop}
                            mobile={mobile}

                        />
                    )
                })
            }
        </div>
    )
}