import React from "react";
import styles from "./Footer.module.scss"
import logo from "../../icons/logo.svg"
import phoneIco from "../../icons/phoneIco.svg"
import geoIco from "../../icons/geoIco.svg"
import facebookIco from "../../icons/facebookIco.svg"
import instaIco from "../../icons/instaIco.svg"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}><img src={logo} alt="#" /></div>
            <div className={styles.footerContainer}>
                <div className={styles.contacts}>Контакты</div>
                <div className={styles.phoneContainer}>
                    <img src={phoneIco} alt="#" />
                    <span>+7 (926) 223-10-11</span>
                </div>
                <div className={styles.geoContainer}>
                    <img src={geoIco} alt="#" />
                    <span>Москва, ул. Юных Ленинцев, д.99</span>
                </div>
                <div className={styles.socialsContainer}>
                    <div className={styles.facebookContainer}>
                        <img src={facebookIco} alt="#" />
                        <span>Facebok</span>
                    </div>
                    <div className={styles.instContainer}>
                        <img src={instaIco} alt="#" />
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}