import React from "react";
import styles from "./MainMenu.module.scss"
import { Link, animateScroll as scroll } from "react-scroll";

export const MainMenu = () => {
    return (
        <div className={styles.mainMenu}>
            
            <button className={styles.btnSales}>
                <span>Акции</span>
            </button>
            <Link to="pizza">
            <button className={styles.btnPizza}>
                <span>Пицца</span>
            </button>
            </Link>
            <Link to="sushi">
            <button className={styles.btnSushi}>
                <span>Суши</span>
            </button>
            </Link>
            <Link to="drinks">
            <button className={styles.btnCoctails}>
                <span>Напитки</span>
            </button>
            </Link>
            <Link to="snack">
            <button className={styles.btnSnacks}>
                <span>Закуски</span>
            </button>
            </Link>
            <Link to="combo">
            <button className={styles.btnCombo}>
                <span>Комбо</span>
            </button>
            </Link>
            <Link to="desserts">
            <button className={styles.btnDesserts}>
                <span>Десерты</span>
            </button>
            </Link>
            <Link to="sauce">
            <button className={styles.btnSauce}>
                <span>Соусы</span>
            </button>
            </Link>
            
        </div>
    )
}