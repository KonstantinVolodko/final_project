import React from "react";
import { BasketWindow } from "../../basketWindow/BasketWindow";
import styles from './AdoptedHeader.module.scss';
import logo from '../../../icons/logo.svg'
import { Link } from "react-router-dom";

export const AdoptedHeader = ({
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
                <BasketWindow 
                    getSum={getSum}
                    basket={basket}
                />
            </div>
        </div>
    )   
}