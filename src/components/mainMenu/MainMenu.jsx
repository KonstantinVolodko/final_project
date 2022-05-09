import React from "react";
import styles from "./MainMenu.module.scss"

export const MainMenu = () => {
    return (
        <div className={styles.mainMenu}>
            <button className={styles.btnSales}>
                <span>Акции</span>
            </button>
            <button className={styles.btnPizza}>
                <span>Пицца</span>
            </button>
            <button className={styles.btnSushi}>
                <span>Суши</span>
            </button>
            <button className={styles.btnCoctails}>
                <span>Напитки</span>
            </button>
            <button className={styles.btnSnacks}>
                <span>Закуски</span>
            </button>
            <button className={styles.btnCombo}>
                <span>Комбо</span>
            </button>
            <button className={styles.btnDesserts}>
                <span>Десерты</span>
            </button>
            <button className={styles.btnSauce}>
                <span>Соусы</span>
            </button>
        </div>
    )
}