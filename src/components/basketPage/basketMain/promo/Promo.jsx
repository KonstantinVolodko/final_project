import React, {useState} from "react";
import styles from './Promo.module.scss'
import promoIco from "../../../../icons/promoIco.svg"



export const Promo = ({
    getSum, setBasketPrice, basketPrice
}) => {

    const [promo, setPromo] = useState('')
    

    const getPromo = () => {
        if(promo === "pizza228") {
            return(
                setBasketPrice(getSum - (getSum * 0.1))
                
            )
        }
    }

    return (
        <div className={styles.promoContainer}>
            <div className={styles.promoInputContainer}>
                <input className={styles.inp} type="text" onChange={event => setPromo(event.target.value)} placeholder="Промокод" />
                <button onClick={() => getPromo()} className={styles.inpButton}>
                    <img src={promoIco} alt="#" />
                </button>
            </div>
            <div className={styles.price}>
                Итого: {basketPrice} ₽
            </div>
        </div>
    )
}