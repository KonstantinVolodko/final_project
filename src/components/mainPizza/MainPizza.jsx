import React from "react";
import styles from "./MainPizza.module.scss"
import filterIco from "../../icons/filterIco.svg"


export const MainPizza = ({
}) => {
    return (
        <div className={styles.mainPizza}>
            <div className={styles.mainPizzaTitle}>
                <div>Пицца</div>
                <button className={styles.btnFilter}>
                    <img src={filterIco} alt="#" />
                    <span>Фильтры</span>
                </button>
            </div>
        </div>
    )
}