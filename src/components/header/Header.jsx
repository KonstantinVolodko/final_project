import React from "react";
import styles from "./Header.module.scss"
import logo from "../../icons/logo.svg"
import basketIco from "../../icons/basketIco.svg"


export const Header = ({
    basket
}) => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <div><img src={logo} alt="#" /></div>
            </div>
            <div className={styles.headerMenu}>
                <div>Акции</div>
                <div>Пицца</div>
                <div>Суши</div>
                <div>Напитки</div>
                <div>Закуски</div>
                <div>Комбо</div>
                <div>Десерты</div>
                <div>Соусы</div>
                <div>Другое</div>
            </div>
            <div className={styles.basketPosition}>
                <button  className={styles.basket}>
                    <img className={styles.basketIco} src={basketIco} alt="#" />
                    <div className={styles.basketTitle}>0 ₽</div>
                </button>
            </div>
        </div>
    )
}