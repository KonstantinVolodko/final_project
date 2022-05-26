import React, { useRef } from "react";
import styles from './Promo.module.scss'
import promoIco from "../../../../icons/promoIco.svg"



export const Promo = ({
    getSum, setBasketPrice, basketPrice, basket, setBasket, promo, setPromo, desctop, mobile
}) => {

    const textInput = useRef()
    
    const getInput = () => setPromo(textInput.current.value)

    return (
        <div>
            <div className={styles.promoContainer}>
            <div className={styles.promoInputContainer}>
                <input className={styles.inp} type="text" ref={textInput} placeholder="Промокод" />
                <button onClick={getInput} className={styles.inpButton}>
                    <img src={promoIco} alt="#" />
                </button>
                
            </div>
            <div className={styles.price}>
                Итого: {getSum} ₽
            </div>
            </div>
        </div>
        
    )
}