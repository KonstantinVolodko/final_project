import React from "react";
import { Footer } from "../footer/Footer";
import { AdoptedHeader } from "./adoptedHeader/AdoptedHeader";
import adoptedImg from '../../images/adoptedImg.svg';
import styles from './AdoptedPage.module.scss'
import { MobileHeader } from "../mobile/mobileHeader/MobileHeader";

export const AdoptedPage = ({
    basket, getSum, desctop, mobile
}) => {

    return (
        <div className={styles.adopted}>
            <div>
                {desctop && 
                <AdoptedHeader 
                getSum={getSum}
                basket={basket}
                desctop={desctop}
                mobile={mobile}
                />
                }
                {mobile &&
                <MobileHeader />
                }
            </div>
            <div className={styles.contentContainer}>
                <img src={adoptedImg} alt="#" />
                <div className={styles.title}>Заказ  номер № {Math.floor(Math.random() * 10000)} принят</div>
                <div className={styles.subTitle}>Спасибо за заказ! Примерное время доставки 45 минут.</div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}