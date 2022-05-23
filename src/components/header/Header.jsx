import React from "react";
import styles from "./Header.module.scss"

import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../icons/logo.svg"
import { BasketWindow } from "../basketWindow/BasketWindow";
import { Select } from "./select/Select";


export const Header = ({
    basket, getSum, setBasket, filtered, addedBasket
}) => {


    

    return (
        <div  className={styles.header}>
            <div className={styles.headerLogo}>
                <Link to="mainPozition">
                <div><img src={logo} alt="#" /></div>
                </Link>
            </div>
            <div className={styles.headerMenu}>
                <div>Акции</div>
                <Link to="pizza">
                    <div>Пицца</div>
                </Link>
                <Link to="sushi">
                    <div>Суши</div>
                </Link>
                <Link to="drinks">
                    <div>Напитки</div>
                </Link>
                <Link to="snack">
                    <div>Закуски</div>
                </Link>
                <Link to="combo">
                    <div>Комбо</div>
                </Link>
                <Link to="desserts">
                    <div>Десерты</div>
                </Link>
                <Link to="sauce">
                    <div>Соусы</div>
                </Link>
                <Select />
            </div>
            <div className={styles.basketPosition}>
                <BasketWindow 
                    getSum={getSum}
                    basket={basket}
                    setBasket={setBasket}
                    filtered={filtered}
                    addedBasket={addedBasket}
                />
            </div>
        </div>
    )
}