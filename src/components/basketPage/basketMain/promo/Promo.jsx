import React from "react";
import styles from './Promo.module.scss'
import promoIco from "../../../../icons/promoIco.svg"

export const Promo = ({
    getSum
}) => {
    return (
        <div className={styles.promoContainer}>
            <div className={styles.promoInputContainer}>
                <input className={styles.inp} type="text" placeholder="Промокод" />
                <button className={styles.inpButton}>
                    <img src={promoIco} alt="#" />
                </button>
            </div>
            <div className={styles.price}>
                Итого: {getSum} ₽
            </div>
        </div>
    )
}