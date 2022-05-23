import React, { useRef, useState } from "react";
import styles from './ProdInfo.module.scss'
import { newCount } from "../../../../constants/Helper";


export const ProdInfo = ({
    basket, setBasket, image, id, count, name, description, price, addedBasket
}) => {

    const refInput = useRef()
    

    const changeInput = (e) => {
        const text = e.target.value;
        
        setBasket(newCount(basket, id, Number(text)))
    }

    const increment = () => {
        setBasket(newCount(basket, id, Number(refInput.current.value = count + 1)))
    }

    const decreament = () => {
        setBasket(newCount(basket, id, Number(refInput.current.value = count - 1)))
        if(count <= 1) {
            setBasket(basket.filter(e => e.id !== id))
        }
    }

    return (
        <div className={styles.prodContainer}>
                            <div><img src={image} alt="#" /></div>
                            <div className={styles.titleContainer}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.description}>{description}</div>
                                <div className={styles.priceContainer}>
                                    <div className={styles.addContainer}>
                                        <button className={styles.minus} onClick={() => decreament()}>-</button>
                                        <div><input disabled ref={refInput} onChange={changeInput}  type="text" min="1" value={count} /></div>
                                        <button className={styles.minus} onClick={() => increment()}>+</button>
                                    </div>
                                    
                                    <button className={styles.deleteBtn} onClick={() => setBasket(basket.filter(e => e.id !== id))}>Удалить</button>
                                    <div className={styles.price}>{(count * price)} ₽</div>
                                </div>
                            </div>
                        </div>
    )
}