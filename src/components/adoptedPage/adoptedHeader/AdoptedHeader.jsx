import React from "react";
import { BasketWindow } from "../../basketWindow/BasketWindow";
import styles from './AdoptedHeader.module.scss';
import logo from '../../../icons/logo.svg'
import { Link } from "react-router-dom";
import { Select } from "../../header/select/Select";

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
                    <Link className={styles.menuElement} to="/">
                        <div>Акции</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Пицца</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Суши</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Напитки</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Закуски</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Комбо</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Десерты</div>
                    </Link>
                    <Link className={styles.menuElement} to="/">
                        <div>Соусы</div>
                    </Link>
                    <Select />
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