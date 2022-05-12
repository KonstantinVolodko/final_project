import React from "react";
import logo from '../../../icons/logo.svg'
import styles from './BasketHeader.module.scss'
import { BasketWindow } from "../../basketWindow/BasketWindow";
import { Link } from "react-router-dom";


export const BasketHeader = ({
    getSum, basket
}) => {
    return (
        <div className={styles.header}>
            <Link className={styles.headerLogo} to='/'>
            <div>
                <div><img src={logo} alt="#" /></div>
            </div>
            </Link>
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
                {/* <BasketComponent
                getSum={getSum()}
                /> */}
                <BasketWindow 
                    getSum={getSum}
                    basket={basket}
                />
            </div>
        </div>
    )

}