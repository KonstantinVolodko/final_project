import React, {useState} from "react";
import styles from './BasketWindowContainer.module.scss'
import { Link } from "react-router-dom";
import { ProdInfo } from "./prodInfo/ProdInfo";

export const BasketWindowContainer = ({
    basket, getSum, setBasket, addedBasket
}) => {

    
    

    const [counter, setCounter] = useState(1)

    // const increament = () => {
    //     addedBasket()
    // }

    // const decreament = () => {
    //     setCounter(counter - 1)
    // }

    

    return (
        <div className={styles.basketWindowContainer}>
            <div className={styles.title}>Ваш заказ</div>
            <div className={styles.container}>

            {
                basket.map(el => {
                    return (
                        <ProdInfo 
                            basket={basket}
                            setBasket={setBasket}
                            name={el.name}
                            id={el.id}
                            count={el.count}
                            description={el.description}
                            image={el.image}
                            price={el.price}
                            addedBasket={addedBasket}
                    />
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